import Image from "next/image";
import logo from "@/../public/assets/images/logo.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-transparent backdrop-blur-md sticky top-0 z-40">
      <div className="wrapper px-4 xl:px-0">
        <div className="flex items-center justify-between py-3">
          <div className="w-full">
            <div className="flex items-center gap-5">
              <Image
                className="max-w-[35px] h-[35px] object-cover object-center"
                src={logo}
                alt="Logo"
              ></Image>
              <p className="text-[#E26B2D] text-[30px] font-bold">Movie</p>
            </div>
          </div>
          <div className="w-full">
            <ul className="flex items-center justify-end gap-10 text-white">
              <li>
                <Link href="/movies" className="hover:text-[#F28814]">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv" className="hover:text-[#F28814]">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-[#F28814]">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
