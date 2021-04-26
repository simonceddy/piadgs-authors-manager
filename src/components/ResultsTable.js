import { THEME_COLOUR_CLASSES } from '../shared/consts';

function ResultsTable({
  children,
  columns = [],
  handleSort = () => null,
  sortCol,
  sortDirection
}) {
  const sortDirIcon = sortDirection === 'ASC' ? '▲' : '▼';

  return (
    <div className="flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map(({ name, key }) => (
              <th
                onClick={() => handleSort(key)}
                className={`border-2 ${THEME_COLOUR_CLASSES} ${sortCol === key ? 'underline' : ''}`}
                key={key}
              >
                {name} {sortCol === key ? sortDirIcon : null}
              </th>
            ))}
            <th
              className={`border-2 ${THEME_COLOUR_CLASSES} ${sortCol === 'titles' ? 'underline' : ''}`}
              onClick={() => handleSort('titles')}
            >
              Titles {sortCol === 'titles' ? sortDirIcon : null}
            </th>
          </tr>
        </thead>
        <tbody
          className={`border-1 ${THEME_COLOUR_CLASSES}`}
        >
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
