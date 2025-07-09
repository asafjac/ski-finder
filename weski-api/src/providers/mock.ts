import { maxGroupSize } from "../consts";
import axios from "axios";

export const searchResortsInMock = async (
  skiSite: number,
  fromDate: string,
  toDate: string,
  groupSize: number,
  sendToClient: (data: unknown) => void,
) => {
  const bodyFormat = {
    ski_site: skiSite,
    from_date: fromDate,
    to_date: toDate,
  };

  for (
    let currGroupSize = groupSize;
    currGroupSize <= maxGroupSize;
    currGroupSize++
  ) {
    sendToClient(
      (
        await axios.post(
          "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator",
          { query: { ...bodyFormat, group_size: currGroupSize } },
        )
      ).data.body.accommodations,
    );
  }
};
