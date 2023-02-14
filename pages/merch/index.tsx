import { Gallery } from '../../components/Gallery/Gallery'
import styles from '../../components/Gallery/Gallery.module.css'
import { WaveOne } from '../../components/Waves/waves';
// NOTE: paddingTop: '4rem' is to displace the page, to account for the
// header that is 4rem tall.

const GalleryPage = () => {
  return (
    <div className={styles.wrapper_wrapper}>
      <h1 className={styles.header}>TIHLDE MERCH</h1>
      <Gallery />

    </div>
  );
};

export default GalleryPage