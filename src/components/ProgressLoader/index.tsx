import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
import { LoaderTypeProps } from "./types";
import { styles } from "./styles";

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
