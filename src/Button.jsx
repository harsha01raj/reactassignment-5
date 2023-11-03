import React from "react";
const Button = (props) => {
  const handleClick = () => {
    // console.log(props.name);
    alert(`You clicked ${props.name} !`);
  };
  return (
    <>
      <button onClick={handleClick}>Click me </button>
    </>
  );
};
export default Button;
