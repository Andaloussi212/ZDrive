function Button({ text, type = 'button', variant = 'primary' }) {
  return (
    <button type={type} className={`button button-${variant}`}>
      {text}
    </button>
  );
}

export default Button;
