import { THEME_COLOUR_CLASSES } from '../shared/consts';

function AuthorSearchForm({ onSubmit = () => null, children }) {
  return (
    <form
      className={`${THEME_COLOUR_CLASSES} flex flex-row justify-around items-center mx-auto p-2`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}

export default AuthorSearchForm;
