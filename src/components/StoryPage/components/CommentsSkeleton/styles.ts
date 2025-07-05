import { borderGray, lightGray } from "../../../../constants/colors";
import { HEADER_HEIGHT } from "../../../Header/styles";
import { STORY_HEADER_HEIGTH } from "../../styles";
import {
  COMMENT_TITLE_HEIGHT,
  COMMENT_TITLE_MARGIN_BOTTOM,
  COMMENTS_PADDING_Y,
} from "../Comments/styles";

const SKELETON_ITEM_PADDING = 16;
const SKELETON_ITEM_BORDER = 1;

export const styles = {
  commonWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    height: `calc(100vh - ${
      HEADER_HEIGHT +
      STORY_HEADER_HEIGTH +
      COMMENT_TITLE_HEIGHT +
      COMMENTS_PADDING_Y * 2 +
      COMMENT_TITLE_MARGIN_BOTTOM * 2
    }px)`,
    width: "100%",
  },
  itemWrapper: {
    padding: `${SKELETON_ITEM_PADDING}px`,
    border: `${SKELETON_ITEM_BORDER}px solid ${borderGray}`,
    borderRadius: "6px",
    marginBottom: "1rem",
    margin: "0 0 1rem",
    backgroundColor: lightGray,
    width: `calc(100% - ${
      SKELETON_ITEM_PADDING * 2 + SKELETON_ITEM_BORDER * 2 + 10
    }px)`,
  },
};
