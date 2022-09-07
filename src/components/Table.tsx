import { HeaderInfo } from "../HeaderInfo";

type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  headerData: Array<HeaderInfo<T>>;
};

const Table = <T, K extends keyof T>({
  data,
  headerData,
}: TableProps<T, K>): JSX.Element => {
  return (
    <div>
      <table>
        {data.map((row, index) => {
          return (
            <tr key={`row-${index}`}>
              {headerData.map((column, index2) => {
                return (
                  <td key={`cell-${index2}`}>
                    {row[column.key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
