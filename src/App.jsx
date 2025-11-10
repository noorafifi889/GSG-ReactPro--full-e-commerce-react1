
import './assets/App.css'
import { Header } from './Component/Header'

import { Containar } from "./Component/Containar";
import Footer from "./Component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />

      <Containar />

      <Footer />
    </>
  );
}

export default App
