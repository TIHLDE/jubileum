import { Gallery } from '../../components/Gallery/Gallery'
import { GalleryV2 } from '../../components/Gallery/GalleryV2'
import { GalleryV3 } from '../../components/Gallery/GalleryV3'

const GalleryPage = () => {
    return (
        <div>
            <h3 style={{textAlign: "center"}}>UTKAST 1</h3>
            <Gallery />
            <h3 style={{textAlign: "center"}}>UTKAST 2</h3>
            <GalleryV2 />
            <h3 style={{textAlign: "center"}}>UTKAST 3</h3>
            <GalleryV3 />
        </div>
    )
}

export default GalleryPage