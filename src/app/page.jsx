import FilterDropdown from "@/components/FilterDropdown";
import Table from "@/components/Table";
import {
  getInputValidationErrorTraces,
  getTraceHistory,
  normalizeTraces,
} from "@/services/trace.service";
import { getTraceOptionsBy } from "@/utils";

export default async function Home() {
  const traces = await getTraceHistory();
  const normalizedTraces = normalizeTraces(
    getInputValidationErrorTraces(traces)
  );

  const errorOptions = getTraceOptionsBy(normalizedTraces, "error");
  const affOptions = getTraceOptionsBy(normalizedTraces, "affId");
  const countryOptions = getTraceOptionsBy(normalizedTraces, "country");
  const langOptions = getTraceOptionsBy(normalizedTraces, "lang");

  return (
    <main className="flex flex-col min-h-screen p-24">
      <h1>Input Validation Errors Report </h1>
      <div className="flex items-center  justify-around">
        <FilterDropdown options={affOptions} label={"Affiliate"} />
        <FilterDropdown options={countryOptions} label={"Country"} />
        <FilterDropdown options={langOptions} label={"Language"} />
        <FilterDropdown options={errorOptions} label={"Error Type"} />
      </div>
      <div>
        <Table data={normalizedTraces} />
      </div>
    </main>
  );
}
