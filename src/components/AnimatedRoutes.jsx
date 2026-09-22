import { Route, Routes, useLocation } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import MainApp from "../pages/MainApp";
import Error from "./Error";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<WelcomePage />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
