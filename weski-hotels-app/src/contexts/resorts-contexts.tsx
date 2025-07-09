import { createContext, FC, ReactNode, useState } from "react";
import { Resort } from "../types.ts";

export const ResortsContext = createContext<{
  resorts: Resort[];
  addResorts: (resorts: Resort[]) => void;
  resetResorts: () => void;
}>({ resorts: [], addResorts: () => {}, resetResorts: () => {} });

export const ResortsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [resorts, setResorts] = useState<Resort[]>([]);

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
    <ResortsContext.Provider value={{ resorts, addResorts, resetResorts }}>
      {children}
    </ResortsContext.Provider>
  );
};
