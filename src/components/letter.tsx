import Cat1 from '../images/bunny-cute.gif'
import Cat2 from '../images/bubududu-panda.gif'
import Cat3 from '../images/cat-kitty.gif'

const Letter = () => {

    const SendButton = () => (
        <button
          type='button'
          className="text-[#FFFF] bg-secondary right-2 py-2 px-4 rounded-lg text-md mt-6"
        >
         Send
        </button>
      );

    return ( 
        <div className="mt-10">
             <div className="bg-[#FFFF] flex flex-col justify-start items-center rounded-lg w-auto h-auto relative
              border-8 border-secondary">
              

              <div className="flex justify-end items-end absolute bottom-0 left-0">
                <img src={Cat1} alt="Cat Image" style={{ width: '150px', height: 'auto' }} />
                </div>
                <div className="flex justify-end items-end absolute bottom-0 right-0">
                    <img src={Cat2} alt="Cat Image" />
                </div>
                <div className="m-10">
                    <h1 className="font-bold text-secondary text-justify">Dear bebe Mark, </h1>
                    <h2 className='text-justify'>Happy Birthday and Happy Anniversary, my love! 🎉🎂💑 Today is a celebration of the incredible
                        person you are and the beautiful journey we've shared together. Your presence in my life is the greatest gift,
                        and I feel so fortunate to celebrate both your amazing existence and the love that binds us.
                        May your birthday be filled with joy, laughter, and all the things that make your heart happy. 
                        Here's to another year of shared adventures, endless love, and countless memories. Happy Birthday
                        and Happy Anniversary, my forever love!  🎈❤️🥂 Happy Birthday and Happy Anniversary, my love! 🎉🎂💑 Today is a celebration of the incredible
                        person you are and the beautiful journey we've shared together. Your presence in my life is the greatest gift,
                        and I feel so fortunate to celebrate both your amazing existence and the love that binds us.
                        May your birthday be filled with joy, laughter, and all the things that make your heart happy. 
                        Here's to another year of shared adventures, endless love, and countless memories. Happy Birthday
                        and Happy Anniversary, my forever love!Happy Birthday and Happy Anniversary, my love! 🎉🎂💑 Today is a celebration of the incredible
                        person you are and the beautiful journey we've shared together. Your presence in my life is the greatest gift,
                        and I feel so fortunate to celebrate both your amazing existence and the love that binds us.
                        May your birthday be filled with joy, laughter, and all the things that make your heart happy. 
                        Here's to another year of shared adventures, endless love, and countless memories. Happy Birthday
                        and Happy Anniversary, my forever love! <br/><br/> <br/> <br/> <br/>  </h2>

                </div>
             
            </div>

      {/* 
<div className="mt-10">
  <input
    type="text"
    className="w-80 h-40 mt-1 p-2 pl-4 rounded-lg border-8 border-primarybordercolor focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
    placeholder="Your reply:"
  />
  <h3 className="text-txt-color font-semibold text-[10px] pt-4">Masesend sa email ko reply moooo </h3>
</div>
<SendButton/>
*/}



        </div>
       
     );
}
 
export default Letter;