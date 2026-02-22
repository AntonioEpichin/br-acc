import { Route, Routes } from "react-router";

import { AppShell } from "./components/common/AppShell";
import { GraphExplorer } from "./pages/GraphExplorer";
import { Home } from "./pages/Home";
import { Patterns } from "./pages/Patterns";
import { Search } from "./pages/Search";

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/graph/:entityId" element={<GraphExplorer />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/patterns/:entityId" element={<Patterns />} />
      </Routes>
    </AppShell>
  );
}
