import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ data }) => {
  return (
    <table className="mt-4">
      <TableHead />
      <TableBody rows={data} />
    </table>
  );
};

export default Table;
