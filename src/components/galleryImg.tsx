interface GalleryImgProps {
    imgSrc: string;
  }
  
  const GalleryImg: React.FC<GalleryImgProps> = ({ imgSrc }) => {
    return (
        <img
        src={imgSrc}
        style={{ maxWidth: '180px', border: '8px solid #E6A0CD', borderRadius: '10px' }}
        alt="Gallery Image"
      />
    );
  };
  
  export default GalleryImg;
  