import React, { useEffect } from "react";
import "./App.css";

function App() {
  var cursor;
  var cursorPointer;

  useEffect(() => {
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");

    document.body.addEventListener("mousemove", function (e) {
      return (
        cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px",
        cursorPointer.style.left = e.clientX + "px",
        cursorPointer.style.top = e.clientY + "px"
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
    </div>
  );
}

export default App;
