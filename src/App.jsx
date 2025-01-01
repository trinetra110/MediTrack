import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDetails from "./pages/PatientDetails";
import RemoteMonitoring from "./pages/RemoteMonitoring";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/MediTrack" element={<DoctorDashboard />} />
        <Route path="/MediTrack/patient-details" element={<PatientDetails />} />
        <Route path="/MediTrack/remote-monitoring" element={<RemoteMonitoring />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
