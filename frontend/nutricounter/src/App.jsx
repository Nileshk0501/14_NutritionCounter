// // App.jsx

// import React from 'react';
// //import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Work from './Work';
// import LandingPage from './LandingPage';  // Import the new landing page component
// import './App.css';  // Import the CSS file for styling

// const App = () => {
//   return (
//     <>
//     <LandingPage/>
//     </>
//   );
// };

// export default App;

// // YourExistingAppComponent.jsx
// // This is your existing App.jsx code, place it in a separate component file
// LandingPage.jsx

// import React from 'react';
// import Work from './Work'
// import './App.css';  // Import the CSS file for styling
// import {Routes, Route, useNavigate} from 'react-router-dom';
// const App= () => {
//   const navigate = useNavigate();
//   const navigateHome = () => {
//     navigate('/Work');
//   };
//   return (
//     <div className="landing-page">
//       <h1>Welcome to Our Food Analyzer</h1>
//       <p>Discover the nutritional value of packaged foods with a simple image upload.</p>
//       <div className="cta-button">
  
//           <button onClick={navigateHome}>Get Started</button>
        
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import LandingPage from './LandingPage';
import Work from './Work';
import Answer from './Answer'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Work />} />
        <Route path="/answer" element={<Answer/>}/>
      </Routes>
    </Router>
  );
};
export default App;