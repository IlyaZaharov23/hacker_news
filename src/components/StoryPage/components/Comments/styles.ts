import { black, white } from "constants/colors";
import { boxShadow } from "constants/styleProps";
import { HEADER_HEIGHT } from "components/Header/styles";
import { STORY_HEADER_HEIGTH } from "../../styles";

const COMMENT_TITLE_MARGIN_TOP = 8;
const COMMENTS_WRAPPER_MARGIN_Y = 32;
export const COMMENT_TITLE_MARGIN_BOTTOM = 16;
export const COMMENTS_PADDING_Y = 16;
// 30px - text height
export const COMMENT_TITLE_HEIGHT =
  COMMENT_TITLE_MARGIN_TOP + COMMENT_TITLE_MARGIN_BOTTOM + 30;

export const styles = {
  commentsWrapper: {
    width: "80vw",
    margin: `${COMMENTS_WRAPPER_MARGIN_Y}px auto`,
    padding: `${COMMENTS_PADDING_Y}px 24px`,
    borderRadius: "10px",
    backgroundColor: white,
    boxShadow: boxShadow,
  },
  commentsTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: black,
    margin: `${COMMENT_TITLE_MARGIN_TOP}px 16px ${COMMENT_TITLE_MARGIN_BOTTOM}px`,
  },
  listWrapper: {
    overflowY: "auto",
    height: `calc(100vh - ${
      HEADER_HEIGHT +
      STORY_HEADER_HEIGTH +
      COMMENT_TITLE_HEIGHT +
      COMMENTS_PADDING_Y * 2 +
      COMMENT_TITLE_MARGIN_BOTTOM * 2
    }px)`,
  },
};
