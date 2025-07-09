import { maxGroupSize } from "../consts";
import axios from "axios";
import { env } from "process";

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

  const providerUrl = env.MOCK_PROVIDER_URL!;
  for (
    let currGroupSize = groupSize;
    currGroupSize <= maxGroupSize;
    currGroupSize++
  ) {
    sendToClient(
      (
        await axios.post(providerUrl, {
          query: { ...bodyFormat, group_size: currGroupSize },
        })
      ).data.body.accommodations,
    );
  }
};
