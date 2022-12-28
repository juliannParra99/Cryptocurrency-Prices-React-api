//componente principal 
//useEffect carga una funcin apenas carga el componente; y useState para guardar y actualizar los datos de la api
import {useEffect, useState} from 'react'
import './App.css'
//importo axios para poder hacer petciones http, al igual que fetch pero con mas funcionalidad. 
import axios from 'axios'
import TableCoins from './components/TableCoins'

function App() {

  const [coins, setCoins] = useState([]) //el dato de inicio cuando se cargue la app  va a ser un arreglo vacio y cuando se traigan los datos se van a actualizar

  //para buscar cryptos.
  const [search, setSearch] = useState('')

  const  getData = async ()=>{
    const  res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data)
    setCoins(res.data) //actualiza la variable coins con esos 100 datos
    
  }

  useEffect(()=>{// esto apra que la funcion cargue la funcion y no actualice hasta que refresque.
    getData()// pide los datos
  },[])
  return (
    <div className="container">
      <div className="row">
        {/*para la busquedas de las cryptos; y se crea metodo para que lo que se tipee se guarde en la variable setSearch*/}
        <input type="text" placeholder='Search a coin' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)}/>
        
        <TableCoins coins = {coins} search = {search}/>
      </div>
    </div>
  )
}

export default App
