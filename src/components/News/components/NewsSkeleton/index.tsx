import { Box, Skeleton } from "@mui/material";
import { CustomDivider } from "components/CustomDivider";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { styles } from "./styles";
import { TEST_ID } from "constants/testIds";

export const NewsSkeleton = () => {
  return (
    <Box sx={styles.commonWrapper} data-testid={TEST_ID.NEWS_SKELETON}>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
      <Box sx={styles.skeletonItemWrapper}>
        <Skeleton height={24} width="100%" />
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Skeleton height={18} width="100%" />
      </Box>
    </Box>
  );
};
