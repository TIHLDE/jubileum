import styles from './Jumbotron.module.css'

export const Jumbotron = ({...props}) => {
    return(
        <div className={styles.main}>
            {props.children}
        </div>
    )
}