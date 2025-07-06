import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";
import { styles } from "./styles";

export const CustomButton: FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button {...props} sx={styles.button}>
      {children}
    </Button>
  );
};
