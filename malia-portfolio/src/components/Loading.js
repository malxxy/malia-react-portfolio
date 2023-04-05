
import React from "react";
// import ReactLoading from "react-loading";
import '../styles/Loading.css';
import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  export default function App() {
    return (
      <motion.svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="220"
          y1="30"
          x2="220"
          y2="70"
          stroke="#fff"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="220"
          y1="70"
          x2="240"
          y2="50"
          stroke="#fff"
          variants={draw}
          custom={2.5}
        />
        <motion.line
          x1="240"
          y1="50"
          x2="260"
          y2="70"
          stroke="#fff"
          custom={3}
          variants={draw}
        />
        <motion.line
          x1="220"
          y1="370"
          x2="360"
          y2="230"
          stroke="#fff"
          custom={3.5}
          variants={draw}
        />
        <motion.line
          x1="260"
          y1="70"
          x2="260"
          y2="30"
          stroke="#fff"
          variants={draw}
          custom={4}
        />
      </motion.svg>
    );
  }

// export default function Loading() {
//   return (
//     <div>
//       <ReactLoading type="balls" color="#0000FF" 
//         height={100} width={50} />
//       <ReactLoading type="bars" color="#0000FF"
//         height={100} width={50} />
//       <ReactLoading type="bubbles" color="#0000FF"
//         height={100} width={50} />
//       <ReactLoading type="cubes" color="#0000FF"
//         height={100} width={50} />
//       <ReactLoading type="cylon" color="#0000FF" 
//         height={100} width={50} />
//       <ReactLoading type="spin" color="#0000FF"
//         height={100} width={50} />
//       <ReactLoading type="spokes" color="#0000FF"
//         height={100} width={50} />
//       <ReactLoading
//         type="spinningBubbles"
//         color="#0000FF"
//         height={100}
//         width={50}
//       />
//     </div>
//   );
// }