import Image from "next/image";

const Addresses = () => {
  return (
    <div className="lg:p-16 p-6 bg-black 2xl:px-44">
      <h1 className="transform scale-y-150 relative z-10 text-center 2xl:text-3xl lg:text-2xl md:text-2xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#707070] via-[#FFFFFF] to-[#707070] bg-clip-text text-transparent lg:mt-0 mt-10 lg:mb-20 mb-16">
        BUSINESS DIPLOMAT "LEVEL ONE" MANZILLARI
      </h1>
      <div className="lg:flex justify-between items-start gap-10 space-y-10 lg:space-y-0">
        <div className="lg:w-1/3 flex flex-col items-center text-center bg-[#373737] rounded-lg border border-[#666666] h-auto">
          <Image
            src={"/hyatt.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover bg-center w-full h-[480px] rounded-lg border border-[#666666]"
          />
          <div className="px-2 py-6 space-y-6">
            <h1 className="transform scale-y-150 text-xl text-white font-bold uppercase py-3">
              HYATT REGENCY TASHKENT TOSHKENT, O‘ZBEKISTON
            </h1>
            <p className="text-white">
              2023  yilning 18,19, 25, 26 noyabr kunlari Vorkshop va bir nechta
              Masterclassni o‘zida jamlagan taʼlim dasturimiz Toshkent shahrida
               bo‘lib o‘tdi.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col items-center text-center space-y-6 bg-[#373737] rounded-lg border border-[#666666]">
          <Image
            src={"/london.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover bg-center w-full h-[480px] rounded-lg border border-[#666666]"
          />
          <div className="px-2 py-6 space-y-6">
            <h1 className="transform scale-y-150 text-xl text-white font-bold uppercase py-3">
              LSE - LONDON IQTISOD OLIY MAKTABI LONDON, BUYUK BRITANIYA.
            </h1>
            <p className="text-white">
              London markazida joylashgan dunyoga mashhur London Iqtisodiyot
              Oliy Maktabi BUSINESS DIPLOMAT "LEVEL ONE" ishtirokchilariga o‘z
              eshigini ochdi.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col items-center text-center space-y-6 bg-[#373737] rounded-lg border border-[#666666]">
          <Image
            src={"/oxford.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover bg-center w-full h-[480px] rounded-lg border border-[#666666]"
          />
       <div className="px-2 py-6 space-y-6">
            <h1 className="transform scale-y-150 text-xl text-white font-bold uppercase py-3">
              OKSFORD UNIVERSITETI OKSFORD, BUYUK BRITANIYA
            </h1>
            <p className="text-white">
              Oksford universiteti LMH loyiha ishtirokchilarini o‘z binosida
              qabul qildi va dasturning bir qismi ushbu universitet binosida
              bo‘lib o‘tdi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
