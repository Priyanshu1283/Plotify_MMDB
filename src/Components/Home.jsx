import { useEffect, useState } from "react";
import Sidenav from "./Templates/Sidenav";
import Topnav from "./Templates/Topnav";
import axios from "../utils/axios";
import Header from "./Templates/Header";
import HorizontalCards from "./Templates/HorizontalCards";
import Loader from "./Loader";
import { motion } from "framer-motion";

function Home() {
  document.title = "Plotify || Home";
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${category}/day`);
        setTrending(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getTrending();
  }, [category]);

  return trending.length > 0 ? (
    <>
      <Sidenav />

      {/* MENU TOGGLE + EXPANDING SQUARE */}
      <div className="z-50 md:hidden overflow-hidden">
        <i
          onClick={() => setopennav((prev) => !prev)}
          className="md:hidden ri-menu-2-fill absolute z-[100] top-[4%] left-[6%] text-2xl text-white hover:text-indigo-400 cursor-pointer transition-colors duration-300"
        ></i>

        <motion.div
          initial={{ width: 0, height: 0 }}
          animate={{ width: opennav ? "100vw" : 0, height: opennav ? "100vh" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 bg-gradient-to-br from-black/90 to-indigo-900/80 backdrop-blur-md z-[10]"
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: opennav ? 1 : 0, y: opennav ? 0 : -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute top-0 left-0 w-full h-screen flex flex-col pt-[25%] px-[13%] z-[20] ${
            opennav ? "flex" : "hidden"
          }`}
        >
          {/* <ResMenu /> */}
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full md:w-4/5 ml-auto h-full overflow-auto overflow-x-hidden bg-black/20 backdrop-blur-sm transition-all duration-300">
        <Topnav />
        <Header />
        <div className="px-6 py-4">
          <HorizontalCards setCategory={setCategory} data={trending} heading={"Trending"} />
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;