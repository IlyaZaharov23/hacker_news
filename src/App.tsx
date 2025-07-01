import { Suspense } from "react";
import { ProgressLoader } from "./components/ProgressLoader";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<ProgressLoader fullScreen />}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
