import Image from "next/image";
import Main from "./components/Main";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Phases from "./components/Phases";
import Register from "./components/Register";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main/>
      <About />
      <Speakers />
      <Phases />
      <Register />
      <Footer />
    </div>
  );
}
