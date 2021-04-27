import { THEME_COLOUR_CLASSES, THEME_HOVER_CLASSES } from '../shared/consts';
import { ThemedButton, ThemedTextInput } from '../shared/components/Forms';

function AuthorForm({
  author = {},
  onSubmit = () => null,
  setValue,
  selectedTitles,
  onSelect
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(author);
      }}
      className="flex flex-col justify-start items-center w-11/12 mx-auto"
    >
      <ThemedTextInput
        value={author.surname}
        onChange={(e) => setValue({ surname: e.target.value })}
        label="Surname"
        id="author-surname"
      />
      <ThemedTextInput
        value={author.givenNames}
        onChange={(e) => setValue({ givenNames: e.target.value })}
        label="Given Names"
        id="author-given-names"
      />
      {!author.titles ? null : (
        <div>
          <span>
            Titles:
          </span>
          {author.titles.map((title = {}) => (
            <label
              key={`${title.id}-checkbox`}
              htmlFor={`title-subject-${title.id}`}
              className={`${THEME_COLOUR_CLASSES} ${THEME_HOVER_CLASSES} hover:underline flex flex-row justify-between items-center`}
            >
              <span className="mr-2 capitalize text-lg">
                {title.title}
              </span>
              <input
                name={`title-subject-${title.id}`}
                id={`title-subject-${title.id}`}
                type="checkbox"
                className="ml-2 p-2"
                value={title.id}
                checked={selectedTitles[title.id] === true}
                onChange={() => onSelect(title.id)}
              />
            </label>
          ))}
        </div>
      )}
      <div>
        <ThemedButton submits>
          Save Changes
        </ThemedButton>
      </div>
    </form>
  );
}

export default AuthorForm;
