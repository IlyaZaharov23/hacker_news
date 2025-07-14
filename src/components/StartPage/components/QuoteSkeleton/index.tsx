import { Box, Skeleton } from "@mui/material";
import { styles } from "./styles";

export const QuoteSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton width="50vw" height={24} />
      <Skeleton width={80} height={24} />
    </Box>
  );
};
