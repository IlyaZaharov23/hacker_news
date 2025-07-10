import { Routes, Route } from "react-router-dom";
import routes from "routes/constants";

export const RenderRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
