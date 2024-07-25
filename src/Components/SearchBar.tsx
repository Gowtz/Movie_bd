export default function SearchBar() {
  return (
    <>
    <div className="search flex items-center w-full justify-center my-10">
    <input type="text" className="rounded-md px-4 w-72 md:w-96 lg:w-[500px] py-2 border-2  border-r-0 rounded-r-none"/>
    <i className='bx bx-search-alt-2 text-2xl px-3 p-1 border-2 rounded-md border-l-0 rounded-l-none cursor-pointer'></i>
    </div>
    </>

  )
}
