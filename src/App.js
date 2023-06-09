import React, { useState } from "react";
import "./App.css";


function App() {
  const [total, setTotal] = useState(0);
  const add = () => {
    setTotal(total + 1);
    let starsPic = document.getElementById("starPics");
    const image = document.createElement("img");
    starsPic.appendChild(image);
    image.setAttribute("id", "star");
    image.setAttribute( "src","./star.png");
    image.setAttribute("height", "50px")
    return total;
  };

  const subtract = () => {
    if (total > 0) {
      setTotal(total - 1);
      let starPics =document.getElementById("starPics")
      let star=document.getElementById("star")
      starPics.removeChild(star);
      return total;
    }
  };

  return (
    <><div>
      <h1>N A V B A R</h1>
    </div>
      <div className="counter">
        <p>
          <button onClick={subtract}>Subtract 1</button>
          <span id="total"> {total} </span>
          <button onClick={add}>Add 1</button>
        </p>
      </div>
      <div id="starPics"></div>
    </>
  );
}

export default App;
