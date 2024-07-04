import React, { useState } from "react";
import styles from "./styledButton.module.css";

const StyledToggleContent = ({ message = "Content", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggle} className={isOpen ? styles.blue : styles.green}>
        {isOpen ? `Hide ${message}` : `Show ${message}`}
      </button>
      {isOpen && <div>{children}</div>}
    </>
  );
};

export default StyledToggleContent;
