import { useNavigate } from "react-router-dom";

const BackButton = () => {
const navigate = useNavigate();
    const handleBackButton = () =>{
        navigate('/home')
    }

    return (  
        <div className="div">
          
            <button
            type='button'
            onClick={handleBackButton}
            className="text-[#FFFF] bg-txt-color right-2 py-2 px-4 rounded-full text-md border-8 border-secondary"
            >
      🡄 Back
    </button>
  
        </div>
    );
}
 
export default BackButton;