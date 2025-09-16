import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_page from "./components/Landing";
import Feaature from "./components/Feature";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Landing_page />
            <Feaature />
          </>
        } />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>

  );
}

export default App;
