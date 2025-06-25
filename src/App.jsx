import "./App.css";
import Info from "../conponents/Info";
import About from "../conponents/About";
import Interests from "../conponents/Interests";
import Footer from "../conponents/Footer";

function App() {
  return (
    <>
      <div className="card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  );
}

export default App;
