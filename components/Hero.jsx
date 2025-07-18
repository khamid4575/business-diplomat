"";

import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/hero.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="h-screen object-cover"
    >
      <p className="transform scale-y-150 absolute 2xl:top-15 lg:top-10 md:top-35 top-15 inset-x-0 flex items-center justify-center z-50 bg-gradient-to-r from-[#E5E5E5] via-[#646464] to-[#E5E5E5] bg-clip-text text-transparent 2xl:text-[81px] lg:text-[63px] md:text-6xl text-[35px] font-semibold uppercase">
        Business Diplomat
      </p>

      <div className="absolute h-screen">
        <Image
          src={"/overlay.jpg"}
          alt="Business Diplomat"
          width={1920}
          height={1080}
          className="w-[100vw] h-full bg-cover z-10 opacity-[85%]"
        />
      </div>

      <div className="absolute flex items-center justify-center inset-0 z-50">
        <Image
          src={"/hero-ceo.png"}
          alt="Business Diplomat"
          width={1000}
          height={1000}
          className="mx-auto object-cover 2xl:w-[900px] 2xl:h-[900px] lg:w-[580px] lg:h-[580px] md:w-[1000px] md:h-[1000px] w-[600px] h-[600px]"
        />
      </div>
      <p className="transform scale-y-150 absolute 2xl:top-173 lg:top-110 md:top-220 top-130 inset-x-0 flex items-center justify-center z-50 bg-gradient-to-r from-[#707070] via-[#FFFFFF] to-[#707070] bg-clip-text text-transparent 2xl:text-5xl lg:text-4xl md:text-4xl text-[20px] font-semibold uppercase">
        Xalqaro biznes ta&apos;lim loyihasi
      </p>

      <Button variant="custom" size="custom" className="absolute z-50 2xl:top-195 lg:top-125 md:top-240 top-142 left-1/2 -translate-x-1/2">
        Loyihada qatnashish uchun ro’yxatdan o’ting
      </Button>

      <div className="absolute bg-linear-to-t from-black to-transparent h-screen z-20 w-full opacity-[80%]"></div>
      <div className="absolute bg-black h-screen z-20 w-full opacity-[40%]"></div>
    </div>
  );
};

export default Hero;
