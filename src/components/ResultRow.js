import { THEME_COLOUR_CLASSES, THEME_HOVER_CLASSES } from '../shared/consts';

function ResultRow({ author = {}, columns = [], onClick }) {
  return (
    <tr
      id={`author-${author.id}`}
      onClick={onClick}
      className={`${THEME_COLOUR_CLASSES} ${THEME_HOVER_CLASSES}`}
    >
      {columns.map(({ key }) => (
        <td
          className="border"
          key={`${author.id}-${key}`}
        >
          {author[key] || ''}
        </td>
      ))}
      <td className="border">{author.titles ? author.titles.length : 0} titles</td>
    </tr>
  );
}

export default ResultRow;
