import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/webzyro-logo.png";

const Footer = () => {
  return (
    <footer className="w-full py-5 px-2 lg:px-0 bg-radial-[at_50%_25%] from-slate-100 via-purple-100 to-rose-200 to-90%">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 justify-center">
          <div className="flex flex-col gap-2 justify-start">
            <Link href={"/"}>
              <Image src={Logo} priority alt="logo" width={200} />
            </Link>
            <p className="text-sm text-slate-600">
              D-56, P C Colony Rd, Housing Board Colony, Kankarbagh, Patna,
              Bihar-800020
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-2xl font-semibold underline underline-offset-1">
              Contact Us
            </h4>
            <div className="flex items-center gap-2">
              <Mail className="text-purple-600" />
              <Link href="mailto:support@gmail.com">support@gmail.com</Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-purple-600" />
              <Link href="tel:+91-1234567890">1234567890</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-2xl font-semibold underline underline-offset-1">
              Useful Links
            </h4>
            <Link href="/about">About Us</Link>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-2xl font-semibold underline underline-offset-1">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
