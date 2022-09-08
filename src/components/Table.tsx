import { HeaderInfo } from "../HeaderInfo";
//@ts-ignore
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  outline: solid black 1px;
  margin-left: auto;
  margin-right: auto;

  & th {
    padding: 1rem;
    background-color: #274073;
    color: #fff;
  }

  & td {
    padding: 0.5rem;
    outline: solid black 1px;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

type TableProps<T> = {
  data: Array<T>;
  headerData: Array<HeaderInfo<T>>;
};

const Table = <T,>({ data, headerData }: TableProps<T>): JSX.Element => {
  return (
    <div>
      <StyledTable>
        <thead>
          {headerData.map((headerItem, index) => {
            let header = headerItem.header;
            //@ts-ignore
            return <th>{header}</th>;
          })}
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={`row-${index}`}>
                {headerData.map((column, indexTwo) => {
                  let key = column.key;
                  return (
                    //@ts-ignore
                    <td key={`cell-${indexTwo}`}>{row[key].toString()}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Table;
