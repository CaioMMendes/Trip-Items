import Link from "next/link";

const Header = () => {
  return (
    <div className="flex relative ">
      <header className="flex p-5 w-full items-center justify-center gap-5 bg-paynes-gray border-b border-columbia-blue-white drop-shadow-sm ">
        <span className="text-2xl">🌴</span>
        <h1 className="font-medium text-2xl uppercase">Trip Items</h1>
        <span className="text-2xl">💼</span>
      </header>
      <Link
        className="absolute right-2 md:right-4 -translate-y-1/2 top-1/2 text-columbia-blue-white"
        href={"/infos"}
      >
        Infos
      </Link>
    </div>
  );
};

export default Header;
