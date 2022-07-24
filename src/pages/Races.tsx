import { Badge, LastFiveRaces } from "../components";

export function Races() {
  return (
    <main>
      <h3>Last Five Races</h3>
      <div className="d-flex flex-row align-items-center mb-3">
        <div className="me-2"><Badge className="fastest-lap" text="Fastest Lap" /></div>
        <div className="me-2"><Badge className="sprint" text="Sprint" /></div>
        <div className="me-2"><Badge className="pole--background" text="Pole" /></div>
      </div>
      <LastFiveRaces />
    </main>
  )
}
