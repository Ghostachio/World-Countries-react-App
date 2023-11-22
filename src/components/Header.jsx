import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


const Header = ({ switcher, mode}) => {
  return (
    <div className="flex justify-around p-8 h-[10px] items-center shadow-lg dark:bg-[#2b3945] ">
      <h1 className="text-2xl dark:text-white">Where In The World</h1>
      <div className="flex align-middle w-[140px] items-center justify-between">
        <div>
          {mode ? <MdOutlineWbSunny  className="text-2xl"/> : <FaMoon className="text-2xl"/>}
        </div>
        <h3 onClick={switcher} className="text-xl hover:cursor-pointer dark:text-white">{mode ? 'Light Mode' : 'Dark Mode' }</h3>
      </div>  
    </div>
  )
}

export default Header