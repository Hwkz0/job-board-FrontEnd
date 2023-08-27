import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import ApplicantList from "./pages/ApplicantList";
import RegisterPage from "./pages/RegisterPage";
import EditApplicant from "./pages/applicants/EditApplicant";
import ViewApplicant from "./pages/applicants/ViewApplicant";
import Login from "./pages/Login";
import JobsPage from "./pages/JobsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Router>

          <Navbar/>

          <Routes>

              <Route exact path="/" element={<HomePage />} />

              <Route exact path="/register" element={<RegisterPage />} />

              <Route exact path="/login" element={<Login />} />

              <Route exact path="/jobs" element={<JobsPage />} />

              <Route exact path="/applicant/view/:applicantId" element={<ViewApplicant />} />

                <Route exact path="/applicant/edit/:applicantId" element={<EditApplicant />} />

            </Routes>


      </Router>
    </div>
  );
}

export default App;
