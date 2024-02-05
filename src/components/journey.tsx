import letterImg from '../images/letterImg.png';
import letterImg2 from '../images/letterImg2.png';
import letterImg3 from '../images/letterImg3.png';
import CatGif from '../images/cat.gif';
import CatGif2 from '../images/happi.gif';
import CatGif3 from '../images/cat1.gif';
import CatGif4 from '../images/cat-catpeek.gif';

const Journey = () => {
    return (  
        <div className="bg-primary mt-10">
            <div className="mt-10 bg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="md:col-span-1 flex justify-center items-center">
                        <img src={letterImg} alt="Image 1" />
                    </div>
                    <div className="md:col-span-1">
                        <h1 className="font-bold text-txt-color text-5xl flex justify-center items-center pb-10">Our Journey</h1>
                        <h3 className="text-1xl text-[#FFFF] font-bold text-justify">
                        As I reflect on our journey together, so far I'm very contented and happy. From the moment we first met, 
                         little did I know that it would mark the beginning of a beautiful chapter in our lives. Isipin mo nag 
                         random meet up lang tayo noon sa phase 2 pa tapos now nagpplano na tayo ng future natin with koomi HAHAHAH,
                          wala lang parang ang happy lang isipin na sa dating app pa talaga hahahahha. Look at your pics at the left 
                          corner, pogi mo babe hihi sana sakin lang forever yang Mark Mendez na yan hmp. Pag hindi talaga magwawala
                           ako and magdadabog kay lord HAHAHAHAHA 
                        </h3> 
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-4 m-10">
                            <div className="md:col-span-1 flex  justify-center items-center ">
                                <div className="h-50 w-[350px] bg-secondary flex rounded-lg justify-center items-center  border-8 border-[#FFFF]">
                                    <img src={CatGif}style={{ width: '90px', height: 'auto' }}/>
                                    <h2 className="pl-4 font-bold text-[#FFFF] ">You're so pogi❤️ </h2>
                                </div>  
                            </div>

                            <div className="md:col-span-1 flex  justify-center items-center ">
                                <div className="h-50 w-[350px] p-1 bg-secondary flex rounded-lg justify-center items-center  border-8 border-[#FFFF]">
                                    <img src={CatGif3}style={{ width: '90px', height: 'auto' }}/>
                                    <h2 className="pl-4 font-bold text-[#FFFF] ">I love you! ❤️</h2>
                                </div>  
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg-grid-cols-2 pt-20">
                    <div className="md:col-span-1">
                        <h1 className="font-bold text-5xl pb-10 text-txt-color">Our Baby Koomi</h1>
                        <h3 className="text-1xl text-[#FFFF] font-bold text-justify pb-10">
                        And when koomi came in our life, I can say na koomi strengthened our relationship more and mas
                         nagkaroon ng purpose. So cure right? and nakita ko rin kung gaano ka mag mahal ng anak kaya ready 
                         na ako sa future kahit 3 na anak pa HAHAHAHA joke lang babe! jinx! Please always pray for koomi's 
                         health babe, and more wet food to come HAHAHAHHA. Happy ako kasi ikaw daddy ni koomi hehehe, 
                         and happy din si koomi hihi. 
                        </h3> 
                    

                        <div className="h-50 w-auto bg-secondary flex rounded-full justify-center items-center  border-8 border-[#FFFF]">
                                    <img src={CatGif2}style={{ width: '90px', height: 'auto' }}/>
                                    <h2 className="p-2 font-bold text-[#FFFF] ">Whishing healthy and long life for Koomi 💑 </h2>
                                    <img src={CatGif2}style={{ width: '90px', height: 'auto' }}/>
                                </div>  
                    </div>
                    <div className="md:col-span-1">
                        <img src={letterImg3} alt="Image 2" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-20">
                    <div className="md:col-span-1 flex justify-center items-center">
                        <img src={letterImg2} alt="Image 1" />
                    </div>
                    <div className="md:col-span-1">
                        <h1 className="font-bold text-txt-color text-5xl flex justify-center items-center pb-10">1 year with you</h1>
                        <h3 className="text-1xl text-[#FFFF] font-bold text-justify">
                        One year has passed since that random meet up on Tinder, and here we are, celebrating not just our 
                        anniversary but also your birthday. It's remarkable how a dating app could pave the way for such 
                        a deep and meaningful connection. Life's sense of humor never fails to amuse me talaga, kasi dating app
                         used to be a play thing for me e, but it turned out to be the most beautiful thing happened to me. 
                          I promise you na matutupad mo lahat ng pangarap mo mahal, you're a hardwoking man  and I am confident
                           na you will be flying airplanes soon! ✈️ ✈️  okay? Ma aachieve mo lahat yan even coast guard, nakakaproud
                            ang bebe ko heheh. I love you! 😘
                        </h3> 
                      
                        <div className="h-50 mt-10 m-2 w-auto bg-secondary flex rounded-full justify-center items-center  border-8 border-[#FFFF]">
                                    <img src={CatGif4}style={{ width: '90px', height: 'auto' }}/>
                                    <h2 className="p-2 font-bold text-[#FFFF] ">Cheers to more years with you 💑 </h2>
                                   
                                </div>  
                    </div>
                </div>

            
            </div>
        </div>
    );
}

export default Journey;
