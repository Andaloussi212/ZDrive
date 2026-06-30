function Button({ text, type = 'button', variant = 'primary', onClick }) {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
