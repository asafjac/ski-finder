import { searchResortsInMock } from "../providers/mock";

export const searchResorts = (
  skiSite: number,
  fromDate: string,
  toDate: string,
  groupSize: number,
  sendToClient: (data: unknown) => void,
) => searchResortsInMock(skiSite, fromDate, toDate, groupSize, sendToClient); //Here we can implement other providers in the future
