import { THEME_COLOUR_CLASSES } from '../shared/consts';

function ResultRow({ author = {}, columns = [], onClick }) {
  return (
    <tr
      id={`author-${author.id}`}
      className={`border-1 ${THEME_COLOUR_CLASSES}`}
      onClick={onClick}
    >
      {columns.map(({ key }) => (
        <td
          key={`${author.id}-${key}`}
        >
          {author[key] || ''}
        </td>
      ))}
    </tr>
  );
}

export default ResultRow;
