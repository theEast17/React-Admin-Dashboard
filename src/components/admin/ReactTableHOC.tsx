import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";

function ReactTableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      canNextPage,
      previousPage,
      canPreviousPage,
      pageCount,
      state:{pageIndex}
    } = useTable(options, useSortBy, usePagination);

    return (
      <div className="p-4 bg-[rgb(247,247,247)]">
        <h2 className="pb-4 uppercase text-left -tracking-tighter">
          {heading}
        </h2>
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="min-w-full bg-white">
            <thead>
              {headerGroups.map((headerGroup) => {
                return (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="border-b"
                  >
                    {headerGroup.headers.map((column) => {
                      return (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className="px-4 py-2 text-left text-sm font-medium text-gray-600"
                        >
                          {column.render("Header")}
                          {column.isSorted && (
                            <span className="absolute ml-1 text-xl text-green">
                              {column.isSortedDesc ? (
                                <AiOutlineSortAscending />
                              ) : (
                                <AiOutlineSortDescending />
                              )}
                            </span>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody {...getTableBodyProps()} className="divide-y">
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="hover:bg-gray-50">
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-2 text-sm text-gray-700"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showPagination && (
            <div className="mt-3 flex justify-center gap-3 items-center">
              <button
                className="border p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-slate-200  bg-[rgb(0,115,255)] text-white hover:bg-[rgb(0,115,255,.8)]"
                disabled={!canPreviousPage}
                onClick={previousPage}
              >
                Prev
              </button>
              <span>{`${pageIndex+1} Page of ${pageCount}`}</span>
              <button
                className="border p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-slate-200 bg-[rgb(0,115,255)] text-white hover:bg-[rgb(0,115,255,.8)]"
                disabled={!canNextPage}
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
}

export default ReactTableHOC;
