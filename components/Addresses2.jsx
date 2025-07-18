import Image from "next/image";

const Addresses2 = () => {
  return (
    <div className="lg:p-16 md:px-36 p-6 2xl:px-44">
      <h1 className="transform scale-y-150 relative z-10 text-center 2xl:text-3xl lg:text-2xl md:text-2xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#454545] via-[#000000] to-[#454545] bg-clip-text text-transparent lg:mt-0 mt-10 mb-16">
        BUSINESS DIPLOMAT "LEVEL TWO" MANZILLARI
      </h1>
      <div className="grid lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-center text-center bg-[#E5E5E5] rounded-lg border border-[#666666] h-auto">
          <Image
            src={"/buxoro.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover bg-center w-full h-[480px] rounded-lg border border-[#666666]"
          />
          <div className="px-2 py-6 space-y-6">
            <h1 className="transform scale-y-150 text-xl font-bold uppercase">
              BUXORO, O‘ZBEKISTON
            </h1>
            <p className="">
              Tarixiy Buyuk Ipak Yo‘li bo‘yida joylashgan Buxoro azaldan savdo
              markazi bo‘lib kelgan. Qadimiy ildizlariga qaramay, Buxoro ko‘hna
              anʼanalarini saqlagan holda zamonaviylikni o‘zida mujassam etgan
              shahar.  
              <br />
              <br />
               Yurtimizning turli go‘shalaridan bo‘lgan tadbirkorlarni
              birlashtirib, biz mazmunli aloqalar va o‘zaro o‘sish uchun yaxlit
              platforma yaratgan holda o‘tmish kelajak bilan to‘qnashgan Buxoroi
              Sharifda O‘zbek Tadbirkorlari muvaffaqiyat tarixining keyingi
              bobini birgalikda yozamiz!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-6 bg-[#E5E5E5] rounded-lg border border-[#666666]">
          <Image
            src={"/tokio.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover bg-center w-full h-[480px] rounded-lg border border-[#666666]"
          />
          <div className="px-2 pb-6 space-y-6">
            <h1 className="transform scale-y-150 text-xl font-bold uppercase">
              TOKIO, YAPONIYA
            </h1>
            <p className="">
              Tokio hamkorlik va rivojlanish uchun mislsiz imkoniyatlarni taqdim
              etuvchi dunyodagi yetakchi biznes markazlaridan biri bo‘lib,
              o‘zining innovatsiyalari va texnologik yutuqlari bilan mashhur
              bo‘lgan megapolisda texnologik startaplardan tortib anʼanaviy
              biznesgacha bo‘lgan turli yirik korporatsiyalar joylashgan. 
              <br />
              <br />
              Safarimiz Tokioning innovatsion ekotizimi ishtirokchilarga soha
              yetakchilaridan o‘rganish va ilg‘or tendensiyalar va
              texnologiyalar bo‘yicha fikr almashish imkonini beradi.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-6 bg-[#E5E5E5] rounded-lg border border-[#666666]">
          <Image
            src={"/osaka.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover bg-center w-full h-[480px] rounded-lg border border-[#666666]"
          />
          <div className="px-2 pb-6 space-y-6">
            <h1 className="transform scale-y-150 text-xl  font-bold uppercase">
              OSAKA, YAPONIYA
            </h1>
            <p className="">
              Osakaning Yaponiyadagi strategik joylashuvi va boshqa yirik Osiyo
              bozorlariga yaqinligi o‘z biznesini chegaradan tashqarida
              kengaytirishga intilayotgan o‘zbekistonlik tadbirkorlar uchun
              ajoyib darvoza bo‘lib xizmat qiladi. 
              <br />
              <br />
              Ushbu biznes safar uchun mezbon shahar sifatida Osakani tanlab,
              biz mazmunli aloqalarni, hamkorlikni rivojlantirishni va
              transchegaraviy savdo va investitsiya imkoniyatlarini
              rivojlantirishni maqsad qilganmiz.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-6 bg-[#E5E5E5] rounded-lg border border-[#666666]">
          <Image
            src={"/kioto.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover bg-center w-full h-[480px] rounded-lg border border-[#666666]"
          />
          <div className="px-2 pb-6 space-y-6">
            <h1 className="transform scale-y-150 text-xl  font-bold uppercase">
              KIOTO, YAPONIYA
            </h1>
            <p className="">
              Yaponiyada innovatsiyalar beshigi sifatida tanilgan Kiotoda
              texnologiya, sog‘liqni saqlash va boshqa sohalarda eng so‘ngi
              yutuqlardan bahramand bo‘lish imkonini beradi. Tadbirkorlarimiz
              ushbu dinamik muhitda soha yetakchilaridan o‘rganish va fikr
              almashish imkoniyatiga ega bo‘ladilar.
              <br />
              <br />
              Osoyishta bambuk o‘rmonlaridan tortib, ulug‘vor ibodatxonalargacha
              o‘zlarining biznes ufqlarini kengaytirib, Kioto go‘zalligini
              ko‘rish imkoniyatiga ega bo‘ladilar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses2;
