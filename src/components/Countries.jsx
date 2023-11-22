
const Countries = ({filtered}) => {


  console.log(filtered)
  return (
      
        <div className=" w-screen flex flex-wrap pt-11 p-2 gap-4 justify-center dark:bg-[#202c37]">
          {filtered.map((country, i) => {
            return (
              <div  key={i} className=" bg-gray-100 rounded-xl shadow-lg transform transition  duration-500 hover:scale-110 w-[300px] overflow-hidden dark:bg-[#2b3945]" >
                <div>
                  <img className=' object-cover w-full h-[150px] ' src={country.flags.svg} alt="" />
                  <h1 className="pb-6 pt-6 p-3 font-mono dark:text-white">{country.name.common}</h1>
                </div>
                <div className="p-3 gap-2 ">
                  <p className="font-thin dark:text-white">Population: {country.population}</p>
                  <p className="font-thin dark:text-white">Region: {country.region}</p>
                  <p className="font-thin dark:text-white">Capital: {country.capital}</p>
                </div>
              </div>
            )
          })} 
        </div>
      )
    }

export default Countries