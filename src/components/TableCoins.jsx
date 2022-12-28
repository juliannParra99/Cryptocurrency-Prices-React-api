import React from 'react'
import CoinRow from './CoinRow'

const titles = ['#','Coin','Price', 'Price Change', '24h Volume']
const TableCoins =({coins,search}) => {
  //para que filtre; si el nombre de la moneda en minuscula, incluye el search pasado a minuscula; lo guarda en un nuevo arreglo
  const filteredCoins = coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <table className='table table-dark mt-4  table-hover'>
        <thead>
            <tr>
                {
                  titles.map((title, index)=>(
                    //recorro cada uno de los valores y cada uno de los title va a ir dentro de un td
                    <td key={index}>{title}</td>
                  ))
                }
            </tr>
        </thead>
        <tbody>
            {filteredCoins.map( (coin, index) =>( 
                <CoinRow coin= {coin} key = {index} index= {index + 1}/>
               ))}
        </tbody>
    </table>
  )
}

export default TableCoins