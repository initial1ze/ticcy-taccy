const style = {
  width: "300px",
  margin: "0 auto",
  marginBottom: "25px",
  display: "grid",
  fontSize: "40px",
  fontWeight: "800",
  textAlign: "center",
};

const Message = ({ message }) => {
  return (
    <h1 style={style} className='msg'>
      {message}
    </h1>
  );
};

export default Message;
