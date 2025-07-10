import { Suspense } from "react";
import { RenderRoutes } from "routes/renderRoutes";
import { ProgressLoader } from "./components/ProgressLoader";

function App() {
  return (
    <Suspense fallback={<ProgressLoader fullScreen />}>
      <RenderRoutes />
    </Suspense>
  );
}

export default App;
