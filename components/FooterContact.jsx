export default function FooterContact() {
  return (
    <footer className="bg-[#171717] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Greeting */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Qadrli Tadbirkor!
        </h2>

        {/* Main Content */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            <span className="font-bold">BUSINESS DIPLOMAT</span> Loyihasining
            O'zbekistondagi sahifasida Sizni ko'rganimizdan xursandmiz!
          </p>
          <p>
            Loyiha Ishtirokchisiga aylanish uchun iltimos ushbu SO'ROVNOMAni
            to'ldirib, -YUBORISH- tugmasini bosing.
          </p>
          <p>Ajratgan vaqtingiz va bildirgan qiziqishingiz uchun rahmat!</p>
          <div className="pt-4">
            <p className="font-semibold text-lg mb-2">
              BIZ BILAN BOG'LANISH UCHUN
            </p>
            <p className="font-semibold text-lg">
              LOYIHANING O'ZBEKISTONDAGI VAKOLATXONASI:
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-base md:text-lg">
          <div>
            <span className="text-white">Call Centre: </span>
            <a
              href="tel:+998910900800"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              +998 91 090 0800
            </a>
            <span className="text-white"> | </span>
            <a
              href="tel:+998919990600"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              +998 91 999 06 00
            </a>
          </div>
          <div>
            <span className="text-white">Office: </span>
            <a
              href="tel:+998712008070"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              +998 71 200 8070
            </a>
            <span className="text-white"> / </span>
            <a
              href="tel:8050"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              8050
            </a>
          </div>
          <div>
            <span className="text-white">Email: </span>
            <a
              href="mailto:office@businessdiplomat.com"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              office@businessdiplomat.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
