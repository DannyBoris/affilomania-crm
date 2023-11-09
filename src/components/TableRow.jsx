import TableCell from "./TableCell";

const TableRow = ({ cells }) => {
  return (
    <tr>
      {cells.map((cell) => (
        <TableCell key={cell.id} cell={value} />
      ))}
    </tr>
  );
};

export default TableRow;
