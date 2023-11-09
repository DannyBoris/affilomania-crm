import { INPUT_VALIDATION_ERROR_NAME } from "@/constants";

export async function getTraceHistory() {
  try {
    const url = "https://tra-mgmt.trafficondev.com/get-traces";
    const response = await fetch(url, { next: { revalidate: 0 } });
    const { traces } = await response.json();
    const filteredTraces = getInputValidationErrorTraces(Object.values(traces));
    return filteredTraces;
  } catch (err) {
    console.log(err);
    throw new Error("No data was found");
  }
}

export function removeTrace(eventId) {}

export function getInputValidationErrorTraces(traces) {
  return traces.filter((trace) => trace.type === INPUT_VALIDATION_ERROR_NAME);
}

export function normalizeTraces(traces) {
  const normalizedTraces = traces.map(normalizeTrace);
  return normalizedTraces;
}

export function normalizeTrace(trace) {
  return {
    eventId: trace.eventId,
    date: trace.createdAt,
    email: trace.data.lead.email,
    affId: trace.data.lead.affId,
    subAff: "",
    offerKey: trace.data.lead.offer.key,
    country: trace.data.lead.country,
    language: trace.data.lead.lang ?? "",
    error: trace.data.inputValidation?.msg ?? null,
  };
}
