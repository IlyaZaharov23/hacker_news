import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
import { styles } from "./styles";

type LoaderTypeProps = {
  fullScreen?: boolean;
  centerInParent?: boolean;
  size?: number;
};

export const ProgressLoader: FC<LoaderTypeProps> = ({
  fullScreen = false,
  centerInParent = false,
  size,
}) => {
  return (
    <Box
      sx={{
        ...(fullScreen
          ? styles.fullScreen
          : centerInParent
          ? styles.centerInParent
          : styles.default),
      }}
    >
      <CircularProgress
        size={fullScreen ? 40 : centerInParent ? 32 : size}
        sx={styles.customLoader}
      />
    </Box>
  );
};
