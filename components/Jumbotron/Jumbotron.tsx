import { useTheme } from '@emotion/react'
import styles from './Jumbotron.module.css'
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

const StyledGradient = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 35%, rgba(0, 0, 0, 1) 70%)`,
    aspectRatio: '1',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    transform: 'translate(-50%,70%)',
    height: '130vw',
    width: 'auto',
    zIndex: '1',
    transition: 'all 2000ms cubic-bezier(0.42, 0, 0.26, 1.38)',
}));

const Container = ({...props}) => {
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                {props.children}
            </div>
            <StyledGradient className={styles.gradientBackground}/>
        </div>
    )
}

export const Jumbotron = ({...props}) => {
    return(<Container>{props.children}</Container>)
}