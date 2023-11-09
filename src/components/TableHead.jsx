const TableHead = () => {
  const headers = [
    { name: "ID" },
    { name: "Date & Time" },
    { name: "Email" },
    { name: "Affiliate ID" },
    { name: "Sub Affiliate" },
    { name: "Offer Key" },
    { name: "Country" },
    { name: "Languages" },
    { name: "Error" },
  ];

  return (
    <thead>
      {headers.map((header) => (
        <th className="px-4" key={header.name}>
          {header.name}
        </th>
      ))}
    </thead>
  );
};

export default TableHead;
