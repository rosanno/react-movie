import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiMovie } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: { title: encodeURI(title), page: "1" },
    });
    setTitle("");
  };

  return (
    <div className="flex items-center gap-3">
      <Link href="/">
        <BiMovie size="30px" className="text-white" />
      </Link>
      <form
        onSubmit={handleSearch}
        className="w-[300px] sm:w-[340px] md:w-[310px] lg:w-[340px] xl:w-[345px] flex items-center bg-white rounded-full py-1 md:py-1 lg:py-2 xl:py-2 px-2"
      >
        <CiSearch size="23px" />
        <input
          type="text"
          value={title}
          placeholder="Search for movie..."
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-2 outline-none bg-transparent placeholder:text-black placeholder:text-sm placeholder:font-normal text-sm text-gray-600 font-semibold"
        />
        <button type="submit" hidden>
          Search
        </button>
      </form>
      <div className="ml-auto flex items-center">
        <div className="flex lg:hidden xl:hidden items-center text-white">
          <IoLocationSharp size="16px" />
          <p>Set Location</p>
        </div>
        <div className="hidden lg:block xl:block">
          <ul className="flex items-center gap-10 text-white">
            <li>Movies</li>
            <li>Theaters</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
