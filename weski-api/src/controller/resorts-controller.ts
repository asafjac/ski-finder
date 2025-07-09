import { Request, Response } from "express";
import { searchResorts } from "../manager/resorts-manager";
import { maxGroupSize, minGroupSize, resorts } from "../consts";

export const getSearchedResorts = async (req: Request, res: Response) => {
  console.log(req.body);
  const { skiSite, fromDate, toDate, groupSize } = req.body;

  const resortIds = resorts.map(({ id }) => id);
  if (!resortIds.includes(skiSite))
    res.status(400).send("This ski site does not exist.");
  else if (groupSize < minGroupSize || groupSize > maxGroupSize)
    res.status(400).send("Group size must be between 1 and 10.");
  else {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders();

    const sendEvent = (resortData: unknown) => {
      res.write(`data: ${JSON.stringify(resortData)}\n\n`);
    };

    await searchResorts(skiSite, fromDate, toDate, groupSize, sendEvent);
    res.end(`data: []\n\n`);
  }
};
