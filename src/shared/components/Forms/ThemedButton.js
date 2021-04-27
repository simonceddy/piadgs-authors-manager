import { THEME_COLOUR_CLASSES } from '../../consts';

function ThemedButton({
  children,
  onClick,
  className,
  submits = false
}) {
  return (
    <button
      type={submits ? 'submit' : 'button'}
      onClick={onClick}
      className={`${THEME_COLOUR_CLASSES} hover:underline border-2 p-2 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
}

export default ThemedButton;
