
import { Outlet } from 'react-router';
import './App.scss';
import NavBar from './routes/NavBar';
import { motion, useIsPresent } from "framer-motion";

function App() {
  const isPresent = useIsPresent();
  return (
    <>
    <NavBar />
    <div id="detail">
      <Outlet />
    </div>
    <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="changePage"
      />
    </>
  );
}

export default App;
