import { SSE } from "sse.js";

export const searchResorts = (
  skiSite: number,
  fromDate: Date,
  toDate: Date,
  groupSize: number,
  addResorts: (resorts: unknown) => void,
): void => {
  const source = new SSE(`${import.meta.env.VITE_SERVER_URL}/resorts/search`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    payload: JSON.stringify({
      skiSite,
      fromDate,
      toDate,
      groupSize,
    }),
  });

  source.addEventListener("message", (event: { data: string }) => {
    const msg = JSON.parse(event.data);
    const hasResponseFinished = !!msg?.length;

    hasResponseFinished && addResorts(msg);
  });
};
