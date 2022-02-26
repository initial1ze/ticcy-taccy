import Square from "./Square.jsx";

const style = {
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ handleClick, board }) => {
  return (
    <div style={style}>
      {[...Array(9)].map((_, pos) => (
        <Square
          key={pos}
          name={pos}
          handleClick={() => handleClick(pos)}
          val={board[pos]}
        />
      ))}
    </div>
  );
};
export default Board;
