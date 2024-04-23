import { CarouselData } from "../CarouselData";
import bgimg from "../../../../assets/images/bgimg.png";
import lines1 from "../../../../assets/images/lines1.png";

function CarouselB() {
    return (
        <div className="overflow-hidden w-screen h-screen"
             style={{
                 backgroundImage: `url(${bgimg})`,
             }}>
            <div className="flex flex-col h-full md:flex md:flex-row h-screen md:justify-between">

                <div className="md:w-3/6 h-3/6 md:h-full flex relative order-first md:order-last ">
                    <div className="">
                        <img src={CarouselData[1].imgs[1].img} alt="img2" className="w-2/6 absolute top-44 md:top-28 transform md:translate-y-1/4 md:translate-x-1/4 "/>
                        <img src={CarouselData[1].imgs[0].img} alt="img1" className="absolute object-center object-cover left-18 md:w-[756px] bottom-0 z-10 " />
                    </div>
                </div>

                <div className="para w-full md:w-3/6 sm:h-3/6 md:h-full md:pl-12 flex flex-col justify-center items-center gap-4 md:gap-10 p-6 ">
                    <div className="w-[246px] ">
                        <img src={lines1} alt="line" />
                        <h1 className="w-[246px] flex justify-center text-xl text-medium">{CarouselData[1].label}</h1>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 md:items-start md:p-4 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl ">{CarouselData[1].title}</h1>
                        <button className="border border-slate-800 rounded-full p-2 md:p-2 md:px-10 w-2/6 mx-auto md:mx-0 ">Shop Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CarouselB;
