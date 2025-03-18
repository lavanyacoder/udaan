// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./MyComponents/Header";
// import Home from "./Pages/Home";
// import Opportunities from "./Pages/Opportunities";
// import Internships from "./Pages/Internships";
// import Scholarships from "./Pages/Scholarships";
// import Hackathons from "./Pages/Hackathons";
// import Conferences from "./Pages/Conferences";
// import Fellowships from "./Pages/Fellowships";
// import OfferHub from "./Pages/OfferHub";
// import Team from "./Pages/Team"; 

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/opportunities" element={<Opportunities />} />
//         <Route path="/internships" element={<Internships />} />
//         <Route path="/scholarships" element={<Scholarships />} />
//         <Route path="/hackathons" element={<Hackathons />} />
//         <Route path="/conferences" element={<Conferences />} />
//         <Route path="/fellowships" element={<Fellowships />} />
//         <Route path="/offerhub" element={<OfferHub />} />
//         <Route path="/team" element={<Team />} /> {/* ✅ Add this line */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./MyComponents/Header";
import Home from "./Pages/Home";
import Opportunities from "./Pages/Opportunities";
import Internships from "./Pages/Internships";
import Scholarships from "./Pages/Scholarships";
import Hackathons from "./Pages/Hackathons";
import Conferences from "./Pages/Conferences";
import Fellowships from "./Pages/Fellowships";
import OfferHub from "./Pages/OfferHub";
import Team from "./Pages/Team"; 

function App() {
  return (
    <Router basename="/udaan">  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/fellowships" element={<Fellowships />} />
        <Route path="/offerhub" element={<OfferHub />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
