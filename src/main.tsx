import "./i18n";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./Pages/Home/Home";
import JeddahTours from "./Pages/JeddahTours/JeddahTours";
import RiyadhTours from "./Pages/RiyadhTours/RiyadhTours";
import WhySaudiArabia from "./Pages/WhySaudiArabia/WhySaudiArabia";
import AlUlaTours from "./Pages/AlUlaTours/AlUlaTours";
import EdgeofWorldExcursion from "./Pages/EdgeofWorldExcursion/EdgeofWorldExcursion";
import RiyadhRedSandTours from "./Pages/RiyadhRedSandTours/RiyadhRedSandTours";
import RiyadhFoodTour from "./Pages/RiyadhFoodTour/RiyadhFoodTour";
import RiyadhByMetro from "./Pages/RiyadhByMetro/RiyadhByMetro";
import MultiDayTrip from "./Pages/MultiDayTrip/MultiDayTrip";
import { LanguageProvider } from './LanguageContext';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="riyadh-tours" element={<RiyadhTours />} />
          <Route path="edge-of-world-excursion" element={<EdgeofWorldExcursion />} />
          <Route path="riyadh-red-sand-tours" element={<RiyadhRedSandTours />} />
          <Route path="riyadh-food-tour" element={<RiyadhFoodTour />} />
          <Route path="riyadh-by-metro" element={<RiyadhByMetro />} />
          <Route path="multi-day-trip" element={<MultiDayTrip />} />
          <Route path="why-saudi-arabia" element={<WhySaudiArabia />} />
          <Route path="jeddah-tours" element={<JeddahTours />} />
          <Route path="al-ula-tours" element={<AlUlaTours />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);
