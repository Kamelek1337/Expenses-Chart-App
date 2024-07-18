import SpendingData from "../util/data.json";
import SpendingColumn from "./SpendingColumn";

export default function SpendingChart() {
  return (
    <article className="spending-chart">
      {SpendingData.map((data) => (
        <SpendingColumn data={data} />
      ))}
    </article>
  );
}
