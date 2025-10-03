import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_page from "./components/Landing";
import Feaature from "./components/Feature";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ProtectedRoute from "./components/ProtectedRoute"; // <-- import it
import Team from "./components/Team";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect } from "react";


function App() {

  
  
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    axios.post(`${API_URL}/active`, { ping: "frontend" })
      .then((res) => console.log("Frontend got response:", res.data))
      .catch((err) => console.error("Error calling backend:", err));

  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing_page />
              <Feaature />
              <Team />
              < Footer />
            </>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-in"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up"
          element={<SignUp routing="path" path="/sign-up" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
