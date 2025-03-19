import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/footer/Footer";
import "./index.css";
import { useEffect, useState } from "react";
import WebsiteLoading from "./component/loading/Loading";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setisLoading(true);
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading ? (
    <WebsiteLoading />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
