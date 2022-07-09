import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Menu } from "./components";
import { Standings, Races, Home } from "./pages";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/races" element={<Races />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
