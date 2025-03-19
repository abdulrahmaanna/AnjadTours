import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WebsiteLoading() {
  const [state, setstate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setstate(false);
    }, 4700);
  }, []);
  return (
    <div
      className={`w-full ${
        state ? "h-screen" : "h-0"
      } duration-500 ease-in-out transition-all  flex flex-col justify-center items-center bg-black relative overflow-hidden`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="logo flex flex-col items-center select-none cursor-pointer">
        <motion.img
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          src="/logo.png"
          alt="logo"
          loading="lazy"
          className="w-96 drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
        />
        <motion.h1
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-bold text-white "
        >
          A N J A D
        </motion.h1>
      </div>

      <div className="flex space-x-2 mt-6">
        {[30, 50, 70, 50, 30].map((height, index) => (
          <motion.div
            key={index}
            className="w-6 bg-yellow-700 rounded-md"
            style={{ height: `${height}px` }}
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="mt-6 w-40 h-1 bg-yellow-600 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
}
