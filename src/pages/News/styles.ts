import { lightBrown, white } from "constants/colors";
import { HEADER_HEIGHT } from "components/Header/styles";

export const styles = {
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: `${HEADER_HEIGHT}px`,
    overflowY: "auto",
    maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
    backgroundColor: lightBrown,
  },
  loadingWrapper: {
    overflowY: "hidden",
  },
  listWrapper: {
    width: "60vw",
    backgroundColor: white,
    padding: "2rem 4rem",
  },
};
