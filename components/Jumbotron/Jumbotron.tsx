import styles from './Jumbotron.module.css'

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