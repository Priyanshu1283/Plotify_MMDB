import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dropdown({ title, options, setCategory, selectedValue }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [Title, setTitle] = useState(title);

  useEffect(() => {
    if (options.includes(selectedValue)) setTitle(selectedValue);
  }, [selectedValue]);

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {Title.toUpperCase()}
        <i className="pl-2 ri-arrow-down-s-line text-lg transition-transform duration-300 transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}></i>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute w-32 mt-2 bg-black/80 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 z-[99999]"
          >
            <ul>
              {options.map((o, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setTitle(o);
                    setCategory(o);
                    setOpen(false);
                  }}
                  className="p-3 text-white text-sm font-medium hover:bg-indigo-900/50 hover:rounded-lg cursor-pointer transition-all duration-200"
                >
                  {o.toUpperCase()}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}