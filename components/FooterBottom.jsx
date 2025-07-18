import { Facebook, Instagram, Twitter } from "lucide-react";

export function FooterBottom() {
  return (
    <div className="bg-black text-white text-center pt-8 pb-6">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 pb-6">
        <a
          href="#"
          className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={24} />
        </a>
        <a
          href="#"
          className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href="#"
          className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={24} />
        </a>
        <a
          href="#"
          className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Google Plus"
        >
          <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">
            G+
          </div>
        </a>
      </div>

      {/* Copyright */}
      <div className="pt-4 text-sm text-gray-400 space-y-1">
        <p>BUSINESS DIPLOMAT HQ | WASHINGTON D.C. USA</p>
        <p>
          "BUSINESS DIPLOMAT" IS PROTECTED BY COPYRIGHT AND PATENTED, IN
          ACCORDANCE
          <br />
          WITH GLOBAL INTELLECTUAL PROPERTY STANDARDS.
        </p>
      </div>
    </div>
  );
}
