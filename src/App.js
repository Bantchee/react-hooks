import React, { useState, useEffect } from "react";


const App = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      }
      else {
        setColor("black");
      }
    };

    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click me!
      </div>
    </div>
  )
}

// const App = () => {
//   const [count, setCount] = useState(0);
  
//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <div>{count}</div>
//       <div>
//         <button onClick={incrementCount}>Increment</button>
//         <button onClick={decrementCount}>decrementCount</button>
//       </div>
//     </div>
//   );
// };

export default App;