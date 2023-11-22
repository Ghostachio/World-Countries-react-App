import { CiSearch } from "react-icons/ci";


const Search = ({onchange, onclick, value, regionSelect}) => {
  return (
    <div className="flex justify-around flex-wrap gap-3 items-center p-11 pr-[200px] pl-[200px] h-[50px] pt-[50px]">
      <form className="flex gap-3 items-center hover:cursor-pointer">
        <CiSearch onClick={onclick} className="text-2xl transform transition hover:scale-125 duration-500 "/>
        <input value={value} onChange={onchange} type="text"className="shadow-md border-gray-600 bg-gray-100 rounded-xl dark:bg-[#2b3945] dark:text-white"/>
      </form>
      <div className="flex flex-col w-fit h-11 gap-3">
      <label className="bg-gray-100 p-3 rounded-md hover:cursor-pointer dark:bg-[#2b3945] dark:text-white" htmlFor="regions">Filter by Region</label>
      <select onChange={regionSelect} className='hover:cursor-pointer dark:bg-[#2b3945] dark:text-white w-[150px]'name="regions" id="regions">
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
      </div>
    </div>
  )
}

export default Search