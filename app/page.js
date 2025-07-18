import Addresses from "@/components/Addresses";
import Addresses2 from "@/components/Addresses2";
import { FooterBottom } from "@/components/FooterBottom";
import FooterContact from "@/components/FooterContact";
import ForWhom from "@/components/ForWhom";
import Goal from "@/components/Goal";
import Hero from "@/components/Hero";
import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <ForWhom />
      <Goal />
      <Addresses />
      <Addresses2 />
      <RegistrationForm />
      <FooterContact />
      <FooterBottom />
    </div>
  );
}
