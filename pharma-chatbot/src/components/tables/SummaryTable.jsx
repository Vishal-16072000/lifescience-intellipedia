
function SummaryTable({ columns, rows }) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
  
          <tbody className="divide-y divide-slate-100">
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-slate-50 transition"
                >
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.id}-${index}`}
                      className="px-5 py-4 text-sm text-slate-700 whitespace-nowrap"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-sm text-slate-400"
                >
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default SummaryTable;
  