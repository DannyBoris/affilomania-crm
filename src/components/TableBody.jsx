import TableRow from "./TableRow";

const TableBody = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row) => {
        const cells = Object.values(row);
        <TableRow cells={cells} />;
      })}
    </tbody>
  );
};

export default TableBody;
