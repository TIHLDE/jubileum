import { Gallery } from '../../components/Gallery/Gallery'
import styles from '../../components/Gallery/Gallery.module.css'

const GalleryPage = () => {
    return (
        <div className={styles.wrapper_wrapper}>
            <h1 className={styles.header}>TIHLDE MERCH</h1>
            <Gallery />
        </div>
    )
}

export default GalleryPage