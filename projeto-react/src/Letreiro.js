import React, { useState, useEffect } from "react";

function Letreiro() {
  let sentence = "Venha estudar na FATEC!"
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    if (currentLetterIndex < sentence.length) {
      const timeoutId = setTimeout(() => {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentLetterIndex, sentence]);

  return <h2>{sentence.slice(0, currentLetterIndex)}</h2>;
}

export default Letreiro