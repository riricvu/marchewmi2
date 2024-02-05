import Cat1 from '../images/bunny-cute.gif'
import Cat2 from '../images/bubududu-panda.gif'
import BackButton from './backButton';


const Letter = () => {

  

    return ( 
        <div className="">
          <div className="flex justify-start mb-4">
           <BackButton/>
          </div>
          
          
          
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
                    <h2 className='text-justify'> Hi babee happy anniversary and happy birthday 🎂💑, 1 year na tayo hehehe. 
                        First of all I want to thank god kasi he let me swiped right sa tinder noon HAHAHAHAHAHAHA. 'Till now it's funny to think na we met 
                        on a dating up but I guess that app actually works and look at us now, we're here and going strong. Mahal, you make me happy palagii, 
                        and happy ako na I'm spending my 20's with you, gusto ko na mag stay sa situation na ikaw lang lagi yung kasama, to the point that I won't 
                        look for anyone but you, only you. Kasi you're my everything na, when I'm with you alam ko na safe ako. Baby I know sometimes masakit ako 
                        sa ulo HAHAHAHA sowwy I just love you too much kaya ganon ako magtampo or mag overthink huhu plsss bear with me and my attitude sometimes hehe.
                         And baby, I'm happy  na you're in a safe place right now, Nakikita ko na masaya ka sa relationship natin and nakikita ko na you really
                          want to work this out and you're really trying. I'm thankful na Hindi ka sumusuko sa mga araw na pasuko na ako, sa mga araw na 
                          di ko na kinakaya at pabitaw na. I'm thankful kasi di mo ako hinahayaan and you wanted me to stay even the times were tough.
                           You're my man, lahat ng bagay naka depend na ako sayo, I don't want to do something if it's not with you, I don't want to witness something 
                           if it's not with you and I don't want to be happy if it's not you, you're my only choice mahal, ikaw lang pipiliin ko sa araw-araw. 
                           I will choose this relationship over and over. Hmm, somethimes I want to give you a tight hug whenever you're feeling sad or pag may fam
                            problem ka, ako nahuhurt pag nakikita kitang ganun babe, I want to be there with you and be with you at the mid of chaos, cause were
                             each other's other half right? I just want to say na andito lang ako mahal, through ups and downs I will be with you. 
                             I cherish every moment we’ve shared, and I’m grateful for the love and happiness you bring into my life. 
                             Let’s continue facing life’s challenges together, hand in hand. I love you more than words can express.
                              Thank you and I love you baby~ 🤍🤍🤍
                         <br/><br/> <br/> <br/> <br/>  </h2>

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