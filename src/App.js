import "./styles.css";
import ProgressBar from "./ProgressBar";

export default function App() {
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar progress={50} />
    </div>
  );
}
