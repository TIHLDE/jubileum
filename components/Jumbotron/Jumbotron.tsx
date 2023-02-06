import styles from "./Jumbotron.module.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import TihldeLogo from "../TihldeLogo/TihldeLogo";

// Create a styled box component using the theme styling
const StyledGradient = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 35%, rgba(0, 0, 0, 1) 70%)`,
}));

// Create the Jumbotron container, using the styled gradient
export const Jumbotron = ({ ...props }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <TihldeLogo
          logoColor="white"
          size="large"
          sx={{ height: 100, width: "auto" }}
        />
        {props.children}
      </div>
      <StyledGradient className={styles.gradientBackground} />
    </div>
  );
};
