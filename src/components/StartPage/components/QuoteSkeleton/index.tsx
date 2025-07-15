import { Box, Skeleton } from "@mui/material";
import { styles } from "./styles";
import { TEST_ID } from "constants/testIds";

export const QuoteSkeleton = () => {
  return (
    <Box
      sx={styles.wrapper}
      data-testid={TEST_ID.START_PAGE.FOOTER_QUOTE_SKELETON}
    >
      <Skeleton width="50vw" height={24} />
      <Skeleton width={80} height={24} />
    </Box>
  );
};
