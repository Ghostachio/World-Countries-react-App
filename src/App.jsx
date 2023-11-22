import { useState, useEffect } from "react"
import Search from "./components/Search"
import Header from "./components/header"
import Countries from "./components/Countries"


function App() {

  

// fresh data from api
  const [allCountries, setAllCountries] = useState([]); 
// changing state to input value
  const [query, setQuery] = useState('');
  const [filteredQuery , setfilteredQuery] = useState('');
  const [region, setRegion] = useState('');
  const [dark, setDark] = useState(false);

  const countriesData = async () => {
    const response = await fetch (`https://restcountries.com/v3.1/${region ? `region/${region}` : 'all'}`)
    const data = await response.json();
      setAllCountries(data);
  }

  useEffect(() => {
    countriesData();
  },[region]);

// getting the value from the input field

  const inputValue = (e) => {
    setQuery(e.target.value);
  }

  // filtering the data function to get only the desired countries

  const filteredCountries = allCountries.filter(countries => {
    return countries.name.common.toLowerCase().includes(query.toLowerCase()) 
  });

// if we change "query to filtered query " it change changes the search from instant on chnage
//  into onlcik search its only a preference thingy

  const filterData = () => {
    setfilteredQuery(query);
    setQuery('');
  }


  const changeRegion = (e) => {
    setRegion(e.target.value)
  }

  const swithMode = () => {
    setDark(!dark);
    console.log(dark)
  }

  return (
   <div className={dark ? 'dark' : ''}>
    <div className="bg-white dark:bg-[#202c37] dark:h-screen">
      <Header mode={dark} switcher={swithMode}/>
      <Search value={query}  onclick={filterData} onchange={inputValue} regionSelect={changeRegion} className='sm:pb-11'/> 
      <div className="flex flex-wrap pt-11">
          <Countries  filtered={filteredCountries}/>
      </div>
      </div>
   </div>
  )
}

export default App
