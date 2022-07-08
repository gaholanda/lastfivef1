import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Menu } from "./components";
import { Home, Races } from "./pages";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/races" element={<Races />} />
      </Routes>
    </BrowserRouter>
  );
}
