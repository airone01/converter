import { Link, useLocation  } from "react-router-dom";

export default function ShyButton() {
  return useLocation().pathname === '/about' ? (
    <Link to="/" className="card">
      <button type="button">convert my files</button>
    </Link>
  ) : null
}