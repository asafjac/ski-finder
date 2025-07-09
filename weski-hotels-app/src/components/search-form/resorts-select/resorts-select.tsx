import Select from "../../select/select";
import { skiSites } from "../../../consts.ts";

interface Props {
  onChange: (resortId: number) => void;
  value: number;
}

const ResortsSelect: React.FC<Props> = ({ onChange, value }) => {
  return (
    <Select
      onChange={(resortId) => onChange(Number(resortId))}
      value={value.toString()}
      options={skiSites.map((resort) => ({
        label: resort.name,
        value: resort.id.toString(),
      }))}
    />
  );
};

export default ResortsSelect;
