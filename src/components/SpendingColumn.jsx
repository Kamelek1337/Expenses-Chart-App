export default function SpendingColumn({ data }) {
  return (
    <div className="spending-column">
      <div className="spending-amount">${data.amount}</div>
      <div
        className={data.day === "wed" ? "column wed" : "column"}
        style={{
          height: data.amount * 2.6 + "px",
        }}
      ></div>
      <div>
        <p>{data.day}</p>
      </div>
    </div>
  );
}
