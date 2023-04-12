import React from "react";
// import ReactLoading from "react-loading";
import '../style/Loading.css';
import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.5 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  export default function App() {
    return (
      <motion.svg
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="500"
          y1="20"
          x2="500"
          y2="80"
          stroke="black"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="500"
          y1="80"
          x2="550"
          y2="40"
          stroke="black"
          variants={draw}
          custom={2.5}
        />
        <motion.line
          x1="550"
          y1="40"
          x2="600"
          y2="80"
          stroke="black"
          custom={3}
          variants={draw}
        />
        <motion.line
          x1="600"
          y1="370"
          x2="600"
          y2="230"
          stroke="black"
          custom={3.5}
          variants={draw}
        />
        <motion.line
          x1="260"
          y1="70"
          x2="260"
          y2="30"
          stroke="black"
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