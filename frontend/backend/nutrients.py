# GitHub repo installation of paddle
# !python3 -m pip install paddlepaddle-gpu==2.5.0 -i https://pypi.org/simple

# !pip install paddleocr

# !git clone https://github.com/PaddlePaddle/PaddleOCR

# !pip install paddlepaddle

# !wget http://nz2.archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.19_amd64.deb
# !sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2.19_amd64.deb

from paddleocr import PaddleOCR
from paddleocr.tools.infer.utility import draw_ocr
import matplotlib.pyplot as plt # plot images
import cv2 #opencv
import os # folder directory navigation
import sys
import re
from prettytable import PrettyTable

def userError(message):
   # print(f"Error : {message}")
    sys.exit(1)

def tableResolver(row_values, standard_nutrition_fact_columns, measure_units):
    obtained_facts = {}
    nutrition_info = " ".join(row_values)
    for keyword in standard_nutrition_fact_columns:
        # Create a pattern to extract the value between the keyword and the next keyword or until the end
        custPattern = re.compile(fr'{re.escape(keyword)}\b(.*?)(?={ "|".join(standard_nutrition_fact_columns)}|$)', re.IGNORECASE)

        # Search for the pattern in the data string
        match = custPattern.search(nutrition_info)

        if match:
            value = match.group(1).strip()
            obtained_facts[keyword] = value
    
    # print(obtained_facts)
    
    for key, value in obtained_facts.items():
        # Use regex to find a numeric value followed by a letter with at most one space
        match = re.search(r'(\d+\.\d+|\d+)\s?([a-zA-Z]+)', value)

        # If a match is found, modify the original dictionary values
        if match:
            numeric_value = float(match.group(1))
            unit = match.group(2).lower()

            # Check if the unit is in the list of possible units
            # unit = 'g' if any(unit.startswith(possible_unit.lower()) for possible_unit in measure_units) else unit
            obtained_facts[key] = {'value': numeric_value, 'unit': unit}


    # print(obtained_facts)
    return obtained_facts
    
def main():
    
    img_filename = str(sys.argv[1])
    img_path = "public/Images/" + img_filename
    
    # Defining the TEXT RECOGNITION MODEL
    ocr_model = PaddleOCR(lang='en')

    img_path = os.path.join('.', img_path)

    result = ocr_model.ocr(img_path)

    # result[0][0][1][0]
    # for res in result[0]:
    #     print(res[1][0])

    # Extracting detected components
    boxes = [res[0] for res in result[0]] #
    texts = [res[1][0] for res in result[0]]
    scores = [res[1][1] for res in result[0]]
    # print(boxes)
    # print(texts)

    font_path = os.path.join('.', '..', '..', 'PaddleOCR', 'doc', 'fonts', 'latin.ttf')

    img = cv2.imread(img_path)

    # reorders the color channels
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    # resizing display area
    plt.figure(figsize=(15,15))

    # draw annotations on image
    annotated = draw_ocr(img, boxes, texts, scores, font_path=font_path)

    # show the image using matplotlib
    plt.imshow(annotated)
    output_path = os.path.join('.', ('annonated_'+img_filename))
    plt.savefig(output_path)
    # plt.show()

    # Getting the nutrition facts into a tabular format
    # The Nutrition Facts can either be in a table format or a list format in the image let it take from user
    # For this we gonna give a drop down in the front end
    # format = input("Enter the format in which the nutriition information is present: ")
    format = "Table"

    pattern_nutri = re.compile(re.escape("Nutrition"), re.IGNORECASE)
    found_nutrition = False
    line_idx = 0
    for i, string in enumerate(texts):
        match = pattern_nutri.search(string)
        if match:
            found_nutrition = True
            line_idx = i
            word_idx = match.start()
            break

    # if not found_nutrition:
    #     userError("Could not scan the type of information please try again")
    # else :
    #     # print(f"Nutrition found at '{texts[line_idx]}' line")
    #     pass
    
    standard_nutrition_fact_columns = ['calories', 'energy', 'total fat', 'saturated fat', 'trans fat', 'polyunsaturated fat', 
                                    'monounsaturated fat', 'cholesterol', 'sodium', 'total carbohydrate', 'carbohydrate', 
                                    'total sugar', 'added sugar', 'sugar', 'sugars', 'dietary fiber', 'fiber', 'protein', 'potassium', 
                                    'calcium', 'vitamin d', 'vitamin a', 'vitamin c', 'iron']
    measure_units = ['kcal', 'kj', 'mg', 'ml', 'oz', 'g', 'l']
    # TABLE
    pattern_column_1 = r'(\d+\.\d+|\d+)\s*'
    pattern_column_2 = r'(\d+\.\d+|\d+)\s*([^\d\s]+)'
    obtained_facts = {}
    # print(texts)
    if format == "Table":    
        for idx, line in enumerate(texts[(line_idx + 1):]):
            line = line.lower()
            # print(line, end = "\t")
            for key in standard_nutrition_fact_columns:
                if key in line:
                # Now there can be two case that the numeric value is read with the parameter or it is read after the parameter
                # Scan if there is a numeric value with the parameter (along with a value)
                    # print(key, end="\t")
                    match1 = re.search(pattern_column_2, line)
                    # print(line, match1)
                    numeric_value = 0.0
                    if match1 != None:
                        numeric_value = float(match1.group(1))
                        # print(numeric_value)
                        if match1.group(2):
                            # print("***********","unit found","************")
                            unit = match1.group(2)
                        else :
                            # print("***********","unit not found","************")
                            unit = None
                        obtained_facts[key] = {"value" : numeric_value, "unit" : unit}
                        # print("match1 found", key, obtained_facts[key])
                        # print("Done")
                    else:
                        # print(line, "VALUE NOT FOUND WITH THE FIELD VALUE")
                        if (len(line.split(" ")) > 2):
                            continue
                        else:
                            # print(key, end = "\t")
                            match2 = re.search(pattern_column_1, line)
                            if match2 != None:
                                numeric_value = float(match2.group(1))
                                if key == standard_nutrition_fact_columns[0] or key == standard_nutrition_fact_columns[1] :
                                    obtained_facts[key] = {"value" : numeric_value, "unit" : "kcal"}
        if len(obtained_facts) == 0:
            obtained_facts = tableResolver(texts[(line_idx + 1):], standard_nutrition_fact_columns, measure_units)
    # PARAGRAPH
    else:
        pass
    if len(obtained_facts) == 0:
        userError("Couldn't perform processing. Please Try Again")
    else:
        unhealthy = 0
        healthy = 0
        print("Unhealthy, Because sugar content is too high")
# table = PrettyTable()
# table.field_names = ['Parameters', 'Value', 'Unit']
# for obj in obtained_facts.items():
#     lst = [obj[0], obj[1]['value'], obj[1]['unit']]
#     table.add_row(lst)
# print(table)


if __name__ == "__main__":
    main()