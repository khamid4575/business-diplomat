import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ForWhom = () => {
  return (
    <div className="bg-black lg:p-16 md:p-36 p-6 2xl:px-44">
      <h1 className="transform scale-y-150 relative z-10 text-center 2xl:text-3xl lg:text-2xl md:text-2xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#707070] via-[#FFFFFF] to-[#707070] bg-clip-text text-transparent mb-16">
        Business Diplomat - kimlar uchun ?
      </h1>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="relative bg-[#373737] rounded-lg">
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#AAAAAA] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#AAAAAA] to-transparent" />

          <div className="p-6 flex flex-col items-center text-center space-y-6">
            <Image
              src={"/forWhom1.jpg"}
              alt=""
              width={600}
              height={600}
              className="object-cover bg-center w-full 2xl:h-[280px] h-[180px] rounded-lg border-2 border-white"
            />
            <h1 className="transform scale-y-150 text-xl text-white font-bold uppercase">
              Rahbar
            </h1>
            <p className="text-white">
              Eksportni takomillashtirib, chet elda o‘z Savdo Uyingizni Tashkil
              etmoqchisiz. Muvaffaqiyatli tashkilotning eng so‘nggi
              tajribalarini biladigan samarali va muvozanatli Rahbar
              bo‘lmoqchisiz.
            </p>
          </div>
          <Link href={"#contactForm"}>
            <Button
              variant="custom"
              className="w-full px-4 py-6 lg:absolute bottom-0"
            >
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
        <div className="bg-[#373737] rounded-lg relative">
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#AAAAAA] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#AAAAAA] to-transparent" />

          <div className="p-6 flex flex-col items-center text-center space-y-6">
            <Image
              src={"/forWhom2.jpg"}
              alt=""
              width={600}
              height={600}
              className="object-cover bg-center w-full 2xl:h-[280px] h-[180px] rounded-lg border-2 border-white"
            />
            <h1 className="transform scale-y-150 text-xl text-white font-bold uppercase">
              BIZNES EGASI
            </h1>
            <p className="text-white">
              Korxona egasi sifatida, kompaniyangizni yangi pog‘onaga ko‘tarish
              niyatidasiz.  Emotsional intellektdan foydalangan holda ko‘zlangan
              natijalarga erishing va ilg‘or tendensiyalardan xabardor bo‘ling.
            </p>
          </div>
          <Link href={"#contactForm"}>
            <Button
              variant="custom"
              className="w-full px-4 py-6 lg:absolute bottom-0"
            >
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
        <div className="relative bg-[#373737] rounded-lg">
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#AAAAAA] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#AAAAAA] to-transparent" />

          <div className="p-6 flex flex-col items-center text-center space-y-6">
            <Image
              src={"/forWhom3.jpg"}
              alt=""
              width={600}
              height={600}
              className="object-cover bg-center w-full h-[180px] 2xl:h-[280px] rounded-lg border-2 border-white"
            />
            <h1 className="transform scale-y-150 text-xl text-white font-bold uppercase">
              ISH YURITUVCHI
            </h1>
            <p className="text-white">
              Jahon Banklari hamda xalqaro moliyaviy tashkilotlar bilan
              to‘g‘ridan-to‘g‘ri ishlashni yo‘lga qo‘ymoqchisiz. Aniq maqsadga
              yo‘naltirilgan jamoalarni yaratish va rag‘batlantirishda sizga
              yo‘l ko‘rsatadigan strategik ko‘nikmalarni o‘rganmoqchisiz.
            </p>
          </div>
          <Link href={"#contactForm"}>
            <Button variant="custom" className="w-full px-4 py-6">
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForWhom;
