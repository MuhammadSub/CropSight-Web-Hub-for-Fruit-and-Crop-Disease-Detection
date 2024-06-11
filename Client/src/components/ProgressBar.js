import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ value, color, extraCls }) => {
  return (
    <div
      className={`chart-circle ${extraCls ? extraCls : "one"}`}
      style={{ width: 120, height: 120 }}
    >
      <CircularProgressbar
        width={120}
        value={value}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: color,
          trailColor: "rgba(255, 255, 255, 0.149)",
        })}
      />{" "}
      <h2 className="number">
        {value}
        <span className="sign">%</span>
      </h2>
    </div>
  );
};
export default ProgressBar;
