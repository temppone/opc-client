import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Wizard = lazy(() => import("../pages/Wizard"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/*" element={<div>NOT FOUND 404</div>} />
        </Routes>
      </Router>
    </Suspense>
  );
};
