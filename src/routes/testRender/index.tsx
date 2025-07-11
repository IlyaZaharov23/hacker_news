import { Suspense, FC } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { RenderRoutes } from "routes/renderRoutes";
import { store } from "store";
import { ProgressLoader } from "components/ProgressLoader";

type TestRenderType = {
  baseRoutes: string[];
};

export const TestRender: FC<TestRenderType> = ({ baseRoutes }) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={baseRoutes}>
        <Suspense fallback={<ProgressLoader fullScreen />}>
          <RenderRoutes />
        </Suspense>
      </MemoryRouter>
    </Provider>
  );
};
