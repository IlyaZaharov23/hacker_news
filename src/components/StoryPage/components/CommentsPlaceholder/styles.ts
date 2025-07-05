import { HEADER_HEIGHT } from "../../../Header/styles";
import { darkGray } from "../../../../constants/colors";

export const styles = {
  placeholderWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: `calc(100vh - ${HEADER_HEIGHT * 2 + 4}px)`,
  },
  textWrapper: {
    marginTop: "6rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  },
  text: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: darkGray,
  },
};
