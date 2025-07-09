import React, { useContext } from "react";
import "./resorts.scss";
import { ResortsContext } from "../../contexts/resorts-contexts.tsx";
import ResortCard from "../resort-card/resort-card.tsx";
import dayjs from "dayjs";
import { skiSites } from "../../consts.ts";

const Resorts: React.FC = () => {
  const { resorts, skiSiteId, groupSize, startDate, endDate } =
    useContext(ResortsContext);

  const skiSiteName = skiSites.find((site) => site.id === skiSiteId)?.name;

  return (
    resorts.length && (
      <div className={"resort-list"}>
        <div className="resort-list__title">Select your ski trip</div>
        <div className="resort-list__subtitle">
          {resorts.length} ski trips options • {skiSiteName} •{" "}
          {`${dayjs(startDate)?.format("MMM DD")} - ${dayjs(endDate)?.format("MMM DD")}`}{" "}
          • {groupSize} {groupSize > 1 ? "people" : "person"}
        </div>

        {resorts.map((resort, index) => (
          <div className="resort-list__resort-card" key={index}>
            <ResortCard
              title={resort.HotelName}
              location={skiSiteName}
              price={resort.PricesInfo.AmountAfterTax}
              rating={resort.HotelInfo.Rating}
              imageUrl={
                resort.HotelDescriptiveContent.Images.find(
                  (image) => image.MainImage,
                ).URL || ""
              }
            />
          </div>
        ))}
      </div>
    )
  );
};

export default Resorts;
