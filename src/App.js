import "./App.css";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Hautfooter from "./component/Hautfooter";
import Header from "./component/Header";
import Slider from "./component/Slider";
import { Route, Routes } from "react-router-dom";
import Panier from "./component/pages/Panier";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import Logout from "./component/pages/Logout";
import Connexion from "./component/pages/Connexion";
import Listc from "./component/pages/Listc";
function App() {
  return (
    <div className="App">
  <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="panier" element={<Panier />} />
        <Route path="contact" element={<Contact />} /> 
        <Route path="logout" element={<Logout />} />
        <Route path="connexion" element={<Connexion />} />
        <Route path="Lists-contacts" element={<Listc />} />
      </Routes>
      <Content />
      <Slider />
      <Hautfooter />
      <Footer />
    </div>
  );
}

export default App;
