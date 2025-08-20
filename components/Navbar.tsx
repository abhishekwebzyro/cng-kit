import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import Logo from "@/public/webzyro-logo.png";

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
        <Button>Get Started</Button>
      </nav>
    </header>
  );
};

export default Navbar;
