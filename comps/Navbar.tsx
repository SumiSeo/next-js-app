import Link from "next/link";
import Image from "next/image";

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <div className="logo">
        <Image width={128} height={77} alt="/" src="/logo.png" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
