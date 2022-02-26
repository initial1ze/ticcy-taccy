const style = {
  margin: "25px auto",
  display: "flex",
};

const Refresh = ({ setBoard, setCurrentPlayer, setMessage }) => {
  const handleClick = () => {
    const newBoard = Array(9).fill("");
    setBoard(newBoard);
    setCurrentPlayer("X");
    setMessage("Click to start the game.");
  };
  return (
    <button style={style} onClick={handleClick}>
      Click to Restart
    </button>
  );
};

export default Refresh;
