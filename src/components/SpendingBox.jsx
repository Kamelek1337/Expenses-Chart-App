import SpendingChart from "./SpendingChart";
import SpendingSummary from "./SpendingSummary";

export default function Spending() {
  return (
    <article className="spending">
      <h3>Spending - Last 7 days</h3>
      <SpendingChart />
      <SpendingSummary />
    </article>
  );
}
