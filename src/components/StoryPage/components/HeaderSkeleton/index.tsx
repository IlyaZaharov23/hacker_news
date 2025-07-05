import { Box, Skeleton } from "@mui/material";
import { styles } from "./styles";

export const HeaderSkeleton = () => {
  return (
    <Box sx={styles.commonWrapper}>
      <Box width="100%" sx={styles.topWrapper}>
        <Skeleton height={36} width={650} />
        <Skeleton height={32} width={32} />
      </Box>
      <Skeleton height={24} width="100%" />
    </Box>
  );
};
