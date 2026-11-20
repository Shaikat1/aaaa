import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useTypewriter } from 'react-simple-typewriter'
import AOS from 'aos';


const PhotoGallery = () => {

    const [text] = useTypewriter({
        words: ["vent Inspiration Gallery"],
        loop: 0
      })

    return (
        <div className="mx-auto max-w-[1300px] mt-28 px-2 lg:px-0">
        
        <div data-aos="zoom-in">
           <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
        </div>
        </div>
    );
};

export default PhotoGallery;