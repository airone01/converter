import { Link, useLocation  } from "react-router-dom";

export default function ShyFooter() {
  return useLocation().pathname !== '/about' ? (
    <Link to="/about" className="card">go back home</Link>
  ) : null
}