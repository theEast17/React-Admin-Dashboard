import { BsSearch } from "react-icons/bs"
import { FaRegBell, FaUser } from "react-icons/fa"

const SearchBar = () => {
  return (
    <section className="flex justify-center items-center p-3 border gap-5 mb-5 rounded-sm">
        <span className="text-lg">
          <BsSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 p-2 px-6 bg-zinc-200 rounded-full border-0 outline-none"
        />
        <span className="text-lg cursor-pointer">
          <FaRegBell />
        </span>
        <span className="text-lg bg-sky-300 p-2 rounded-full cursor-pointer">
          <FaUser />
        </span>
      </section>
  )
}

export default SearchBar