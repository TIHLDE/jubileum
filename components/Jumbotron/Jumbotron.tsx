import styles from './Jumbotron.module.css'

// Create a styled box component using the theme styling
const StyledGradient = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 35%, rgba(0, 0, 0, 1) 70%)`,
}));

// Create the Jumbotron container, using the styled gradient
export const Jumbotron = ({...props}) => {
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                {props.children}    
            </div>
            <div className={styles.gradientBackground}></div>
        </div>
    )
}