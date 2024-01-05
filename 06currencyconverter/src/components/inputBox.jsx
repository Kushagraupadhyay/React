import React ,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "", // we will alow the users the option to inject their own class
}) {
    const id = useId() // generates a unique ID
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input
            id = {id}            
            type='number'
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // this condition will first check whether amount change exists, only then will it fetch the value of the amount change and typecast it to number
            // The e (or any other name you choose to give it) is an event object that is automatically passed to the onChange event handler when the event occurs. The event object (e) contains information about the event, such as the target element, the type of event, and other properties.
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' 
            value={selectedCurrency} 
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} // map will loop through all the elements in the array and returns a callback
            disabled={currencyDisabled}
            name="" id=""> 
                {currencyOptions.map((currency)=>( // if we use curly braces instead of paranthesis for the function we dnt have to return anything
                    <option key={currency} value={currency}>{currency}</option>  // the options tag is for the select field
                ))} 
            </select> 
        </div> 
    </div>
  )
}

export default InputBox