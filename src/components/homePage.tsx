import CuteCatGif from '../images/cutecat.gif';
import DurationCard  from './durationCard';
import PinkButton from '../components/pinkButton';
import { BsEnvelopeHeartFill } from 'react-icons/bs';
import { BsFillImageFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const handleOpenLetterClick = () => {
        navigate('/letter'); 
    };

    const handleOpenJourneyClick = () => {
        navigate('/journey'); 
    }
    const handleOpenCouponsClick = () => {
        navigate('/coupons'); 
    }
    const handleOpenGalleryClick = () => {
        navigate('/gallery'); 
    }

    
    return (
        <div className="w-full">
            <div className="grid grid-cols-12 bg-[#FFFF] shadow-md  rounded-lg">
                
                
                <div className="col-span-12 md:col-span-4">
                    <div className="bg-secondary h-[500px] w-90 flex justify-start items-end rounded-lg">
                        <img
                            src={CuteCatGif}
                            alt="Cute Cat GIF"
                            className="max-w-full"
                        />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8 bg-[#FFFF] rounded-lg">
                    <h2 className="text-secondary font-bold text-2xl pt-6">We've been together for: </h2>

                    <div className="flex justify-center gap-6">
                        <DurationCard label={'Days'} />
                        <DurationCard label={'Hours'} />
                        <DurationCard label={'Mins'} />
                    </div>
                   

                    <div className="flex flex-wrap justify-center">
                    <PinkButton label={'Open Letter'} icon={<BsEnvelopeHeartFill />} onClick={handleOpenLetterClick}/>
                    <PinkButton label={'Our journey'} icon={<BsEnvelopeHeartFill />} onClick={handleOpenJourneyClick}/>
                    <PinkButton label={'Gallery'} icon={<BsFillImageFill />} onClick={handleOpenGalleryClick} />
                    <PinkButton label={'Coupons'} icon={<BsEnvelopeHeartFill />} onClick={handleOpenCouponsClick} />
                </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;
