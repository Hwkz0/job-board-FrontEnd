import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import RegisterApplicant from "./applicants/RegisterApplicant";
import EditApplicant from "./applicants/EditApplicant";
import ViewApplicant from "./applicants/ViewApplicant";

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

          <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/register" element={<RegisterApplicant />} />

              <Route exact path="/applicant/view/:applicantId" element={<ViewApplicant />} />

                <Route exact path="/applicant/edit/:applicantId" element={<EditApplicant />} />

            </Routes>


      </Router>
    </div>
  );
}

export default App;
