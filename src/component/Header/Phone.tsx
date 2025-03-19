import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuOreos } from "react-icons/cg";
import { motion } from "framer-motion";
import PhoneDrawer from "./PhoneDrawer";

function Phone() {
  const [isMainHeaderFixed, setMainHeaderFixed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMainHeaderFixed(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed flex top-0 right-0 left-0 justify-between items-center lg:hidden w-full bg-opacity-50 z-50 px-6 py-4 h-16 transition duration-300 ${
          isMainHeaderFixed ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <Link to="/" className="w-40">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Link>

        <motion.div
          onClick={() => setIsDrawerOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <CgMenuOreos className="text-3xl text-gray-50 hover:text-gray-200 transition-all duration-300 ease-in-out" />
        </motion.div>
        <PhoneDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
    </>
  );
}

export default Phone;
