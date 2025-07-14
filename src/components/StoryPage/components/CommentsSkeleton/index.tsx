import { Box, Skeleton } from "@mui/material";
import { CustomDivider } from "components/CustomDivider";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { styles } from "./styles";
import { TEST_ID } from "constants/testIds";

export const CommentsSkeleton = () => {
  return (
    <Box
      sx={styles.commonWrapper}
      data-testid={TEST_ID.COMMENTS.COMMENTS_SKELETON}
    >
      <Box sx={styles.itemWrapper}>
        <Skeleton width="100%" height={21} />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton width="100%" height={24} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Skeleton width={220} height={33} />
        </Box>
      </Box>
      <Box sx={styles.itemWrapper}>
        <Skeleton width="100%" height={21} />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton width="100%" height={24} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Skeleton width={220} height={33} />
        </Box>
      </Box>
      <Box sx={styles.itemWrapper}>
        <Skeleton width="100%" height={21} />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton width="100%" height={24} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Skeleton width={220} height={33} />
        </Box>
      </Box>
      <Box sx={styles.itemWrapper}>
        <Skeleton width="100%" height={21} />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton width="100%" height={24} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Skeleton width={220} height={33} />
        </Box>
      </Box>
      <Box sx={styles.itemWrapper}>
        <Skeleton width="100%" height={21} />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton width="100%" height={24} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Skeleton width={220} height={33} />
        </Box>
      </Box>
      <Box sx={styles.itemWrapper}>
        <Skeleton width="100%" height={21} />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton width="100%" height={24} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Skeleton width={220} height={33} />
        </Box>
      </Box>
    </Box>
  );
};
