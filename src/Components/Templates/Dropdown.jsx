import { useState, useRef, useEffect } from "react";

export default function Dropdown({title, options, setCategory, selectedValue}) {
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
      <button className=" px-4 py-2 bg-[#6556cd] text-white text-sm rounded-lg shadow transition">
        {Title.toUpperCase()}<i className="pl-2 ri-arrow-down-s-line"></i>
      </button>

      {open && (
        <div className="absolute w-25 bg-gray-200 rounded-lg shadow-lg z-99999">
          <ul>
            {options.map((o, i) => (
            <li key={i} onClick={() => {
                setTitle(o);
                setCategory(o);
            }} className="p-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer text-black text-xs">{o.toUpperCase()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
