import "./index.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import About from "./Components/About/About";
import Reservation from "./Pages/Reservation/Reservation";
import Login from "./Pages/Login/Login";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";

function App() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order_online" element={<UnderConstruction />} />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
