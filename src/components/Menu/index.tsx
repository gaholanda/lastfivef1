import { Link } from "react-router-dom";

export function Menu() {
  return (
    <menu className="d-flex align-items-center py-3 mb-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/races" className="text-light text-uppercase text-decoration-none">Races</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/standings" className="text-light text-uppercase text-decoration-none">Standings</Link>
          </li>
        </ol>
      </nav>
    </menu>
  );
}
