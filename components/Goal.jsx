import { RectangleCircle } from "lucide-react";
import Image from "next/image";

const Goal = () => {
  return (
    <div className="bg-black">
      <div className="relative bg-black  py-16 lg:px-4 px-6 flex flex-col items-center text-white overflow-hidden">
        {/* Sarlavha */}
        <h1 className="transform scale-y-150 relative z-10 text-center 2xl:text-3xl lg:text-2xl md:text-2xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#707070] via-[#FFFFFF] to-[#707070] bg-clip-text text-transparent mb-24">
          Business Diplomat loyihasining maqsadi
        </h1>

        {/* Dekorativ "1" raqami orqa fon elementi */}
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="block-one absolute 2xl:left-[470px] left-[190px] top-[220px] bg-clip-text text-transparent  bg-gradient-to-b from-white/90 to-[#666] text-[260px] font-extrabold leading-none z-0 select-none flex items-center justify-center"
        >
          1
        </p>
        {/* Card */}
        <div className="relative overflow-hidden z-10 bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] rounded-2xl px-6 md:px-10 py-8 max-w-3xl text-justify shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-[#4d4d4d]">
          <div className="absolute bg-white w-36 h-36 rounded-full -left-24 top-[70px] z-50 blur-3xl opacity-80"></div>

          {/* Card Title */}
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold uppercase mb-4">
            Masshtablashtirish Platformasi
          </h3>

          {/* Paragraphs */}
          <p className="text-sm sm:text-base text-center mb-4">
            Xar bir mavsum 5 bosqichdan iborat bo‘lib, Biznes va Diplomatiya
            uyg‘unligida tashkil topgan bu xalqaro Loyiha,  O‘zbekiston
            Tadbirkorlarini dunyo sathida imidjini oshirishni Jaxon bozorida
            imkoniyatlarini kengaytirishni maqsad qilgan. Ularni ham
            professional tadbirkor, ham komil inson sifatida xar taraflama
            yuksaltirib Global Biznes landshaftiga integratsiyalashtiradi.
          </p>
          <p className="text-sm sm:text-base text-center mb-6">
            Professional Biznes Etiket qoidalarini, Kiyinish (Dresskod)
            madaniyati, Muzokaralar olib borish ko‘nikmalarini oshirish, Omma
            oldida Nutk suzlash, Diplomatiya tamoyillari va Axloqiy biznes
            amaliyotini singdirib,  Xalqaro Bozorga chiqish uchun zarur bo‘lgan
            muhim bilim va vositalar bilan jihozlashni,  yetakchi jahon moliya
            institutlari bilan to‘g‘ridan-to‘g‘ri ishlash imkoniyatini
             beradidi. 
          </p>

          {/* Image */}
          <Image
            src="/goal1.png" // bu yerga rasmni real pathini kiriting
            alt="Business Diplomat participants"
            width={600}
            height={600}
            className="rounded-lg mx-auto w-full h-[240px] max-w-md object-cover"
          />
        </div>
      </div>
      <div className="relative bg-black py-16 lg:px-4 px-6 flex flex-col items-center text-white overflow-hidden">
        {/* Dekorativ "1" raqami orqa fon elementi */}
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className=" bold-one absolute 2xl:left-[470px] left-[190px] top-[90px] bg-clip-text text-transparent  bg-gradient-to-b from-white/90 to-[#666] text-[260px] font-extrabold leading-none z-0 select-none flex items-center justify-center"
        >
          2
        </p>

        {/* Card */}
        <div className="relative overflow-hidden z-10 bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] rounded-2xl px-6 md:px-10 py-8 max-w-3xl text-justify shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-[#4d4d4d]">
          <div className="absolute bg-white w-36 h-36 rounded-full -left-24 top-[70px] z-50 blur-3xl opacity-80"></div>

          {/* Card Title */}
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold uppercase mb-4">
            ZAMONAVIY VA YUQORI MADANIYATLI TADBIRKORLAR JAMIYATI
          </h3>

          {/* Paragraphs */}
          <p className="text-sm sm:text-base text-center mb-4">
             Loyihaning maqsadi – nafaqat global kengayish uchun zarur ko‘nikma
            va bilimlar, balki professionallik, madaniy intizom va axloqiy
            xulq-atvorning eng yuqori standartlarini o‘zida mujassam etgan
            kelajakni yaratishdir. 
          </p>
          <p className="text-sm sm:text-base text-center mb-6">
             Mahorat darslari va resurslarimiz orqali biz kapitalingiz o‘sishini
            taʼminlovchi, xalqaro hamkorlikni rivojlantiruvchi hamda halollik va
            mukammallik qadriyatlarini qo‘llab-quvvatlovchi istiqbolli Lider
            Tadbirkorlar hamjamiyatini shakllantirishga intilamiz.
          </p>

          {/* Image */}
          <Image
            src="/goal2.png" // bu yerga rasmni real pathini kiriting
            alt="Business Diplomat participants"
            width={600}
            height={600}
            className="rounded-lg mx-auto w-full h-[240px] max-w-md object-cover"
          />
        </div>
      </div>
      <div className="relative bg-black pt-16 lg:px-4 px-6 flex flex-col items-center text-white overflow-hidden ">
        {/* Dekorativ "1" raqami orqa fon elementi */}
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className=" bold-one absolute 2xl:left-[470px] left-[190px] top-[90px] bg-clip-text text-transparent  bg-gradient-to-b from-white/90 to-[#666] text-[260px] font-extrabold leading-none z-0 select-none flex items-center justify-center"
        >
          3
        </p>

        {/* Card */}
        <div className="relative overflow-hidden z-10 bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] rounded-2xl px-6 md:px-10 py-8 max-w-3xl text-justify shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-[#4d4d4d]">
          <div className="absolute bg-white w-36 h-36 rounded-full -left-24 top-[70px] z-50 blur-3xl opacity-80"></div>

          {/* Card Title */}
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold uppercase mb-4">
            TANLANGAN MANZILLAR - YETUK EKSPERTLAR BILAN
          </h3>

          {/* Paragraphs */}
          <p className="text-sm sm:text-base text-center mb-4">
            Ushbu Loyiha mavjud barcha yuqori darajadagi standartni saqlagan
            holda, talabchan va intizomli muhitda amalga oshiriladi. BMT Bosh
            kotibiyati sobiq xodimi, xalqaro toifadagi diplomat va tadbirkor
            janob Mirshod Shakirov noanʼanaviy va kutilmagan manzillarni
            sinchkovlik bilan tanlab, ishtirokchilarning dastur bilan
            shug‘ullanishi davomida eng yuqori sifat va qulaylikni his
            qilishlarini taʼminlaydi.
          </p>
          <p className="text-sm sm:text-base text-center mb-6">
            Xalqaro ekspertlar tomonidan mahorat darslari to‘plami, jahon
            tajribasida qo‘llaniladigan biznes keys tahlillar, professional
            amaliyotlar muvaffaqiyat uchun zarur bo‘lgan barcha jihatlarni,
            intizom va mukammallik muhitini qo‘llab-quvvatlaydi, shuningdek har
            bir ishtirokchiga individual yondashgan holda ularning biznes
            ko‘nikmalarini yuksaltirish va global maydonda muvaffaqiyat qozonish
            imkoniyatini beradi.
          </p>

          {/* Image */}
          <Image
            src="/goal3.png" // bu yerga rasmni real pathini kiriting
            alt="Business Diplomat participants"
            width={600}
            height={600}
            className="rounded-lg mx-auto w-full h-[240px] max-w-md object-cover"
          />
        </div>
      </div>
      <div className="bg-black text-white text-center border-t border-white border-dashed max-w-96 lg:max-w-4xl mt-16 mx-auto">
      </div>
    </div>
  );
};

export default Goal;
