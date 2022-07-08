import { Link } from "react-router-dom";

export function Menu() {
  return (
    <menu>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/races">Races</Link>
      </nav>
    </menu>
  );
}
