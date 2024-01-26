import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "views/layout.jsx";
import Dashboard from "views/dashboard.jsx";
import Sector from "views/sector.jsx";
import Region from "views/regions";
import Pestle from "views/pest";
import Country from "views/country";
import Source from "views/source";
import Topic from "views/topic";
import EndYear from "views/endYear";
import Geography from "views/geoMapping";
import LineChart from "views/lineChart";
import Pie_Chart from "views/pieChart";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/geoMap" element={<Geography />} />
              <Route path="/lines" element={<LineChart />} />
              <Route path="/pie" element={<Pie_Chart />} />
              <Route path="/year" element={<EndYear />} />
              <Route path="/topic" element={<Topic />} />
              <Route path="/sectors" element={<Sector />} />
              <Route path="/regions" element={<Region />} />
              <Route path="/pestle" element={<Pestle />} />
              <Route path="/source" element={<Source />} />
              <Route path="/country" element={<Country />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
