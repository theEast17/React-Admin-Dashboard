import { BsSearch } from "react-icons/bs"
import { FaRegBell, FaUser } from "react-icons/fa"

const SearchBar = () => {
  return (
    <section className="flex justify-center items-center p-3 border max-md:border-0 max-md:gap-2 gap-5 mb-5 rounded-sm">
        <span className="text-lg max-md:text-md">
          <BsSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 px-6 max-md:px-2  bg-zinc-200 rounded-full border-0 outline-none"
        />
        <span className="text-lg cursor-pointer">
          <FaRegBell />
        </span>
        <span className="text-lg max-md:text-md bg-sky-300 p-2 rounded-full cursor-pointer">
          <FaUser />
        </span>
      </section>
  )
}

export default SearchBar