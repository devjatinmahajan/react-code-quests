import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <Link to={"/challenge-I"}>Challenge I - Directory Structure</Link>
      <Link to={"/challenge-II"}>Challenge II - Implement Ratings</Link>
      <Link to={"/challenge-III"}>Challenge III - Toasts</Link>
      <Link to={"/challenge-IV"}>Challenge IV - Infinite moving cards</Link>
      <Link to={"/challenge-V"}>Challenge IV - Select all checkboxes</Link>
      <Link to={"/challenge-VI"}>Challenge IV - Generate text effect</Link>
    </div>
  );
}
