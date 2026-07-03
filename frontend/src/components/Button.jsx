function Button({
  text,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
