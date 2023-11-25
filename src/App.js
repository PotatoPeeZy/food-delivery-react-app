import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import FirstPage from "./Pages/FirstPage/FirstPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<FirstPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
