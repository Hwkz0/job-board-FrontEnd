import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import RegisterApplicant from "./applicants/RegisterApplicant";

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

          <Routes>
            <Route path="/register" element={<RegisterApplicant />} />

            </Routes>


      </Router>
    </div>
  );
}

export default App;
