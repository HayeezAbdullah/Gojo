import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Whyme from "./components/Whyme";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Body></Body>
      <Whyme></Whyme>
      <Footer></Footer>
    </div>
  );
}

export default App;
