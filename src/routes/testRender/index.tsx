import { Suspense, FC } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { RenderRoutes } from "routes/renderRoutes";
import { store } from "store";
import { ProgressLoader } from "components/ProgressLoader";

type TestRenderType = {
  baseRoute: string;
};

export const TestRender: FC<TestRenderType> = ({ baseRoute }) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[baseRoute]}>
        <Suspense fallback={<ProgressLoader fullScreen />}>
          <RenderRoutes />
        </Suspense>
      </MemoryRouter>
    </Provider>
  );
};
