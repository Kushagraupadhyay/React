import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) // passing the currency to fetch the data from the API for that specific currency
  const options = Object.keys(currencyInfo) // will extract the keys from the api data so that we can show them as options
  
  const convert = () => { // method to convert the value from one currency to anothr
    setConvertedAmount(amount*currencyInfo[to])// we can use dot notation and squarebracket both interchangably to access the data
  } // currency info contains all the data conversions for currency from , using the data and dot/square bracket notation we are accesing the to currency part for the from currecy data object fetched by the currency info hook
   
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault() // prevents this form from submitting to a URL
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox // running the imported component
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}              
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="to"
              amount={convertedAmount}
              amountDisabled // to make field readonly
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={to}
              />
            </div>
            <button
            type='submit'  // this button will submit the form and run the convert function as defined in form
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert  {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
