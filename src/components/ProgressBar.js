import { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressBar = ({ done, className }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={className}>
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </div>
  );
};

export default styled(ProgressBar)`
  .progress {
    background-color: #d8d8d8;
    border-radius: 20px;
    position: relative;
    margin: 15px 0;
    height: 20px;
    width: 250px;
  }

  .progress-done {
    background: linear-gradient(to left, #f2709c, #ff9472);
    box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    max-width: 100%;
    opacity: 0;
    transition: 1s ease 0.3s;
  }
`;
