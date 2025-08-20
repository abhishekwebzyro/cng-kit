import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import Logo from "@/public/webzyro-logo.png";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="w-full bg-white sticky top-0 shadow-xl z-40">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-2 md:px-0">
        <Link href="/">
          <Image src={Logo} priority alt="logo" width={200} />
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-bold text-xl text-slate-800"
            >
              {label}
            </Link>
          ))}
        </div>
        <Button type="button" className="hidden md:block">
          Get Started
        </Button>
        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
