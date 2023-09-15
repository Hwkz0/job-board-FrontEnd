import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import RegisterPage from "./components/pages/RegisterPage";
import EditApplicant from "./components/pages/applicants/EditApplicant";
import ViewApplicant from "./components/pages/applicants/ViewApplicant";
import Login from "./components/pages/Login";
import JobsPage from "./components/pages/JobsPage";
import HomePage from "./components/pages/HomePage";


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
