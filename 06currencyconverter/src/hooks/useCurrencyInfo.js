import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData]= useState({}); //  data is a piece of state, and setData is the function that you use to update that state. When setData(newValue) is called, React will re-render the component with the updated state, and the new value will be reflected in the UI.

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) // fetch function is used to make an HTTP request to a specific URL
        .then((res) => res.json())//converting response data to JSON
        .then((res) => setData(res[currency])) // since the above api response contains both currency data as well as data as well, and we only want to insert currency related key value pairs , we use res[currency] to only inser data that has key equals currency
        // res[currency] is used to select only the part of the response data that corresponds to the specified currency
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;