import { useContext, useEffect } from "react";
import { Header, Races, Standings } from "./components";
import { AppContext } from "./contexts/AppContext";

export function App() {
  const { drivers } = useContext(AppContext);

  useEffect(() => {
    console.log(drivers);
  }, [drivers])

  return (
    <>
      <Header />
      <Races />
      <Standings />
    </>
  );
}
