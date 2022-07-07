import { useContext, useEffect } from "react";
import { Header, Races, Standings } from "./components";
import { AppContext } from "./contexts/AppContext";

export function App() {
  const context = useContext(AppContext);

  useEffect(() => {
    console.log(context);
  }, [context])

  return (
    <>
      <Header />
      <Races />
      <Standings />
    </>
  );
}
