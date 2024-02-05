import pic from '../images/pic.jpg';
import { FaHeart } from "react-icons/fa";
import GalleryImg from './galleryImg';
import Pic1 from '../images/5.jpg'
import Pic2 from '../images/4.jpg'
import Pic3 from '../images/3.jpg'
import Pic4 from '../images/6.jpg'
import Pic5 from '../images/7.jpg'
import Pic6 from '../images/8.jpg'
import Pic7 from '../images/9.jpg'
import Pic11 from '../images/11.jpg'








const Gallery = () => {
  return (
    <div className="border-8 border-secondary bg-[#FFFF]">
      <div className=" p-6 flex justify-between items-center rounded-lg w-auto h-auto ">
        <div className="w-auto bg-secondary flex rounded-md justify-center items-center border-8 border-primary">
          <img
            className="m-2"
            src={pic}
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            alt="Gallery image"
          />
          <h2 className="p-2 font-bold text-[#FFFF] ">Cherry & Mark</h2>
        </div>

        
        <div className="flex justify-center items-center gap-4">
            <FaHeart style={{color: 'pink', height: '30px', width: '30px'}}/>
            <FaHeart style={{color: 'pink', height: '30px', width: '30px'}}/>

        </div>

      </div>
      <h1 className="font-bold text-primary text-1xl">Me and You</h1>
      <div className="mt-10 font-bold text-primary mb-10 flex justify-center items-center mr-4">
        
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 p-3 justify-between items-center">
                <GalleryImg imgSrc={Pic1} />
                <GalleryImg imgSrc={Pic2} />
                <GalleryImg imgSrc={Pic3} />
                <GalleryImg imgSrc={Pic4} />
                <GalleryImg imgSrc={Pic5} />
                <GalleryImg imgSrc={Pic6} />
                <GalleryImg imgSrc={Pic7} />
                <GalleryImg imgSrc={Pic11} />
            </div>
        </div>
    </div>
  );
};

export default Gallery;
