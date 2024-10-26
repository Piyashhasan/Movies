export default function SearchInput() {
  return (
    <div className="flex items-center justify-center">
      <form className="mt-10">
        <div className="flex items-center">
          <input
            className="w-96 p-5 outline-none rounded-l-full"
            type="text"
            name="search"
            id="search"
            placeholder="Search for movies"
          />
          <button className="py-5 px-8 text-white rounded-r-full bg-[linear-gradient(98.37deg,_#f89e00_0.99%,_#da2f68_100%)]">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
