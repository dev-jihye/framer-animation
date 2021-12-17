import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  flex-direction: column;
`;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
//   margin: 20px;
// `;

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } },
// };

// const Box2 = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
//   margin: 20px;
// `;

// const Circle = styled(motion.div)`
//   background-color: white;
//   height: 70px;
//   width: 70px;
//   place-self: center;
//   border-radius: 35px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.5,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const circleVariants = {
//   start: {
//     opacity: 0,
//     y: 10,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

// const BiggerBox = styled.div`
//   width: 600px;
//   height: 600px;
//   background-color: rgba(255, 255, 255, 0.3);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

// const Box3 = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
//   margin: 20px;
// `;

// const boxVariants3 = {
//   hover: { scale: 1, rotateZ: 90 },
//   click: { scale: 1, borderRadius: "100px" },
// };

// const Box4 = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
//   margin: 20px;
// `;

// const Svg = styled.svg`
//   width: 300px;
//   height: 300px;
//   path {
//     stroke: white;
//     stroke-width: 2;
//   }
// `;

// const svg = {
//   start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
//   end: {
//     fill: "rgba(255, 255, 255, 1)",
//     pathLength: 1,
//   },
// };

// const Box5 = styled(motion.div)`
//   width: 400px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   position: absolute;
//   top: 100px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const box5Variants = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotateZ: 360,
//   },
//   leaving: {
//     opacity: 0,
//     scale: 0,
//     y: 50,
//   },
// };

// const Box6 = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 28px;
//   width: 400px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   top: 100px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
//   position: absolute;
//   top: 100px;
// `;

// const box6 = {
//   entry: (back: boolean) => ({
//     x: back ? -500 : 500,
//     opacity: 0,
//     scale: 0,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   exit: (back: boolean) => ({
//     x: back ? 500 : -500,
//     opacity: 0,
//     scale: 0,
//     transition: {
//       duration: 0.5,
//     },
//   }),
// };

// const Box7 = styled(motion.div)`
//   width: 400px;
//   height: 400px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const Circle = styled(motion.div)`
//   background-color: #00a5ff;
//   height: 100px;
//   width: 100px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

const Box8 = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 20px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [clickedId, setClickedId] = useState<null | string>(null);
  console.log(clickedId);
  //const biggerBoxRef = useRef<HTMLDivElement>(null);

  {
    /* Motion Values */
  }
  // const x = useMotionValue(0);
  // const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  // const gradient = useTransform(
  //   x,
  //   [-800, 0, 800],
  //   [
  //     "linear-gradient(135deg, rgb(150, 226, 209), rgb(74, 83, 206))",
  //     "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
  //     "linear-gradient(135deg, rgb(146, 231, 191), rgb(238, 189, 54))",
  //   ]
  // );
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  // const [showing, setShowing] = useState(false);
  // const toggleShowing = () => setShowing((prev) => !prev);

  // const [visible, setVisible] = useState(1);
  // const [back, setBack] = useState(false);
  // const next = () => {
  //   setBack(false);
  //   setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  // };
  // const prev = () => {
  //   setBack(true);
  //   setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  // };

  // const [clicked, setClicked] = useState(false);
  // const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper
    // onClick={toggleClicked}
    // style={{ background: gradient }}
    >
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box8 onClick={() => setClickedId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {clickedId ? (
          <Overlay
            onClick={() => setClickedId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box8 layoutId={clickedId} style={{ width: 600, height: 300 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>

      {/* layoutId */}
      {/* <Box7>
        {!clicked ? (
          <Circle
            layoutId="circle"
            style={{
              borderRadius: 50,
            }}
          />
        ) : null}
      </Box7>
      <Box7>
        {clicked ? (
          <Circle
            layoutId="circle"
            style={{
              borderRadius: 0,
            }}
          />
        ) : null}
      </Box7> */}

      {/* Animation Presence - Slider*/}
      {/* <AnimatePresence custom={back}>
        {showing ? (
          <Box5
            variants={box5Variants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null} 

        <Box6
          custom={back}
          variants={box6}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box6>
      </AnimatePresence>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button> */}

      {/* Animation */}
      {/* <Box
        transition={{ type: "spring", delay: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      /> */}

      {/* Variables */}
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      {/* <Box2 variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box2> */}

      {/* Gesture */}
      {/* <BiggerBox ref={biggerBoxRef}>
        <Box3
          drag
          dragSnapToOrigin
          dragConstraints={biggerBoxRef}
          variants={boxVariants3}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        />
      </BiggerBox> */}

      {/* Motion Values */}
      {/* <Box4 style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin /> */}

      {/* SVG Animation */}
      {/* <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          fill="transparent"
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 2 },
          }}
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        ></motion.path>
      </Svg> */}
    </Wrapper>
  );
}

export default App;
