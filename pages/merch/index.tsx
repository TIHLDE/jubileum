import { Gallery } from '../../components/Gallery/Gallery'
import styles from '../../components/Gallery/Gallery.module.css'
import { MerchItems } from '../../components/MerchBox/MerchItems';
// NOTE: paddingTop: '4rem' is to displace the page, to account for the
// header that is 4rem tall.

const GalleryPage = () => {
  return (
    <div
      className={styles.wrapper_wrapper}
      style={{
        paddingTop: '4rem',
        minHeight: 'calc(100vh - 4rem)',
      }}
    >
      <h1 className={styles.header}>TIHLDEMERCH</h1>
      <Gallery items={MerchItems} />
    </div>
  );
};

export default GalleryPage