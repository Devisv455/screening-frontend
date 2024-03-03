
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from "./components/navbar/login"
// import { Navbar } from "./components/navbar/navbar"
// import { Signup } from './components/navbar/signup';
// import { Appointment } from "./components/navbar/appointment"
// import 'tailwindcss/tailwind.css';
// import "./style.css"
// function App() {

//   return (
//    <div className = "App">

//     <Router>
//       <Navbar />
//       <Routes>
//          <Route path ="/login" element={ <Login /> } />
//          <Route path ="/signup" element = { <Signup />} />
//          <Route path = "/appointment" element ={<Appointment />} />
//       </Routes>
//    </Router>
   
// <img src="./digital-health.jpg" alt="Patient" className='picture' />

//    </div>
//   )
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/navbar/login"
import { Navbar } from "./components/navbar/navbar"
import { Signup } from './components/navbar/signup';
import { Appointment } from "./components/navbar/appointment"
import { Home } from "./components/navbar/Home"
import 'tailwindcss/tailwind.css';
import "./style.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
