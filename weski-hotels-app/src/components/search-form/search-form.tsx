import React, { useContext, useState } from "react";
import "./search-form.scss";
import ResortsSelect from "./resorts-select/resorts-select";
import GuestsSelect from "./guests-select/guests-select";
import SearchButton from "./search-button/search-button";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { searchResorts } from "../../queries/search-resorts.ts";
import { ResortsContext } from "../../contexts/resorts-contexts.tsx";
import { skiSites } from "../../consts.ts";

const SearchForm: React.FC = () => {
  const [skiSiteId, setSkiSiteId] = useState<number>(1);
  const [groupSize, setGroupSize] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(dayjs().toDate());
  const [endDate, setEndDate] = useState<Date | null>(
    dayjs().add(7, "days").toDate(),
  );
  const {
    addResorts,
    resetResorts,
    setSkiSiteId: setSkiSiteIdContext,
    setGroupSize: setGroupSizeContext,
    setStartDate: setStartDateContext,
    setEndDate: setEndDateContext,
  } = useContext(ResortsContext);

  return (
    <div className="search-form">
      <ResortsSelect
        value={skiSiteId}
        onChange={(skiSiteId) => setSkiSiteId(skiSiteId)}
      />
      <GuestsSelect
        value={groupSize}
        onChange={(groupSize) => setGroupSize(groupSize)}
      />

      <DatePicker
        className="search-form-date-picker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        enableTabLoop={false}
      />
      <DatePicker
        className="search-form-date-picker"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        enableTabLoop={false}
      />

      <SearchButton
        onClick={() => {
          resetResorts();

          setSkiSiteIdContext(skiSiteId);

          setGroupSizeContext(groupSize);
          setStartDateContext(startDate!);
          setEndDateContext(endDate!);

          searchResorts(
            skiSiteId,
            dayjs(startDate)?.format("MM/DD/YYYY"),
            dayjs(endDate)?.format("MM/DD/YYYY"),
            groupSize,
            addResorts,
          );
        }}
      />
    </div>
  );
};

export default SearchForm;
