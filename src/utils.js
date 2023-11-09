const formatTime = (time) => {
  return Intl.DateTimeFormat().format(time);
};

export const getTraceOptionsBy = (traces, traceKey) => {
  return Array.from(new Set(traces.map((trace) => trace[traceKey])));
};
