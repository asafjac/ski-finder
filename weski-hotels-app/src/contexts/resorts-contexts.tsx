import { createContext, FC, ReactNode, useState } from "react";
import { Resort } from "../types.ts";

export const ResortsContext = createContext<{
  resorts: Resort[];
  addResorts: (resorts: Resort[]) => void;
  resetResorts: () => void;
  skiSiteId?: number;
  setSkiSiteId: (name: number) => void;
  startDate?: Date;
  setStartDate: (date: Date) => void;
  endDate?: Date;
  setEndDate: (date: Date) => void;
  groupSize?: number;
  setGroupSize: (groupSize: number) => void;
}>({
  resorts: [],
  addResorts: () => {},
  resetResorts: () => {},
  setSkiSiteId: () => {},
  setStartDate: () => {},
  setEndDate: () => {},
  setGroupSize: () => {},
});

export const ResortsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [resorts, setResorts] = useState<Resort[]>([]);
  const [skiSiteId, setSkiSiteId] = useState<number>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [groupSize, setGroupSize] = useState<number>();

  const addResorts = (resorts) => {
    setResorts((oldResorts) =>
      [...oldResorts, ...resorts].sort(
        (a, b) => a.PricesInfo.AmountAfterTax - b.PricesInfo.AmountAfterTax,
      ),
    );
  };

  const resetResorts = () => {
    setResorts([]);
  };

  return (
    <ResortsContext.Provider
      value={{
        resorts,
        addResorts,
        resetResorts,
        skiSiteId,
        setSkiSiteId,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        groupSize,
        setGroupSize,
      }}
    >
      {children}
    </ResortsContext.Provider>
  );
};
