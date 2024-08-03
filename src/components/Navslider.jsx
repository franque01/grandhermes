import { useState, useEffect } from "react";


const Navslider = () => {
    const [index, setIndex] = useState(0);
    const content = ["Content 1", "Content 2", "Content 3"];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % content.length);
      }, 3000); // Change content every 3 seconds
  
      return () => clearInterval(interval);
    }, [content.length]);

  return (
    <div className="slider">
      <div className="slider-content" style={{ transform: `translateX(${-index * 100}%)` }}>
        {content.map((text, i) => (
          <div className="slider-item" key={i}>
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navslider
