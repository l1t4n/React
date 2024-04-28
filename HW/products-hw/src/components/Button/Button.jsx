export const Button = ({ onClickHandler, text }) => {
  return (
    <button
      className="btn bg-purple-300 rounded-lg px-4 py-2"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
