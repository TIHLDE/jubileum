import { Gallery } from '../../components/Gallery/Gallery'
import styles from '../../components/Gallery/Gallery.module.css'

const GalleryPage = () => {
    return (
        <div className={styles.wrapper_wrapper}>
            <h1 style={{ textAlign: "center" }}>TIHLDE MERCH</h1>
            <Gallery />
            {/* <h3 style={{textAlign: "center"}}>UTKAST 1</h3>
            <Gallery />
            <h3 style={{textAlign: "center"}}>UTKAST 2</h3>
            <GalleryV2 /> */}
        </div>
    )
}

export default GalleryPage