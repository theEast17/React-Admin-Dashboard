import { useTable, Column, TableOptions } from "react-table";

function ReactTableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(options);

    return (
    <div className='p-4'>
    <h2 className='pb-4 uppercase text-left -tracking-tighter'>{heading}</h2>
    <div className='overflow-x-auto'>
        <table {...getTableProps()} className='min-w-full bg-white'>
            <thead>
                {headerGroups.map((headerGroup) => {
                    return (
                        <tr {...headerGroup.getHeaderGroupProps()} className='border-b'>
                            {headerGroup.headers.map((column) => {
                                return (
                                    <th {...column.getHeaderProps()} className='px-4 py-2 text-left text-sm font-medium text-gray-600'>
                                        {column.render("Header")}
                                    </th>
                                );
                            })}
                        </tr>
                    );
                })}
            </thead>
            <tbody {...getTableBodyProps()} className='divide-y'>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} className='hover:bg-gray-50'>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()} className='px-4 py-2 text-sm text-gray-700'>
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
</div>

    );
  };
}

export default ReactTableHOC;
