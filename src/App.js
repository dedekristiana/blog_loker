import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailPost from "./components/DetailPost";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productName" element={<DetailPost />} />
    </Routes>
  );
}

export default App;
