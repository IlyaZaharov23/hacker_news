import { Box, Skeleton } from "@mui/material";
import { CustomDivider } from "components/CustomDivider";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { TEST_ID } from "constants/testIds";
import { styles } from "./styles";

export const NewsSkeleton = () => {
  return (
    <Box sx={styles.commonWrapper} data-testid={TEST_ID.NEWS_PAGE.NEWS_SKELETON}>
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
