import { useTheme } from '@emotion/react'
import styles from './Jumbotron.module.css'


export const Jumbotron = ({...props}) => {
    const theme = useTheme();
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.gradientBackground} style={{
                backgroundColor: theme.palette.primary.main,
                background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 35%, rgba(0, 0, 0, 1) 70%)`
            }}></div>
        </div>
    )
}