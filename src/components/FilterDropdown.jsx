const FilterDropdown = ({ name, options, label }) => {
  return (
    <div className="flex flex-col  flex-1 mx-2">
      <label htmlFor="">{label}</label>
      <select className="border border-slate-200 p-2" name={name} id="">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
