import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_page from "./components/Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Landing_page />
          </>
        } />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>

  );
}

export default App;
