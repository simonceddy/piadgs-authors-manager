import { THEME_COLOUR_CLASSES } from '../shared/consts';

function ResultsTable({ children, columns = [], handleSort = () => null }) {
  return (
    <div className="flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map(({ name, key }) => (
              <th
                onClick={() => handleSort(key)}
                className={`border-2 ${THEME_COLOUR_CLASSES}`}
                key={key}
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
