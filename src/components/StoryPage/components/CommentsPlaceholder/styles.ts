import { HEADER_HEIGHT } from "../../../Header/styles";
import { STORY_HEADER_HEIGTH } from "../../styles";
import {
  COMMENT_TITLE_HEIGHT,
  COMMENT_TITLE_MARGIN_BOTTOM,
  COMMENTS_PADDING_Y,
} from "../Comments/styles";
import { darkGray } from "../../../../constants/colors";

export const styles = {
  placeholderWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: `calc(100vh - ${
      HEADER_HEIGHT +
      STORY_HEADER_HEIGTH +
      COMMENT_TITLE_HEIGHT +
      COMMENTS_PADDING_Y * 2 +
      COMMENT_TITLE_MARGIN_BOTTOM * 2
    }px)`,
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
