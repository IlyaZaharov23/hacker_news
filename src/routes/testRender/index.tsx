import { Suspense } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { RenderRoutes } from "routes/renderRoutes";
import { store } from "store";
import { ProgressLoader } from "components/ProgressLoader";

export const TestRender = () => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Suspense fallback={<ProgressLoader fullScreen />}>
          <RenderRoutes />
        </Suspense>
      </MemoryRouter>
    </Provider>
  );
};
