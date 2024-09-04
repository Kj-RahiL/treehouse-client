import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
