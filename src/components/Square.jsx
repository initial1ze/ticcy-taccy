const style = {
  border: "3px solid black",
  fontSize: "40px",
};

const Square = ({ name, val, handleClick }) => {
  return (
    <button name={name} onClick={handleClick} style={style}>
      {val}
    </button>
  );
};

export default Square;
