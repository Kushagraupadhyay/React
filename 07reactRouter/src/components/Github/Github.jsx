import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const[data,setData] = useState([])
    // useEffect( () => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json()) // on successful resolution of the above url , it will give a callback , we here then convert it to JSON
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
            

    //     })
    // },[] )

    // the above call works when we click on the github section , we want to optimize this further and hence we want to make the call when the user hovers over the github button so that the call is sent a couple of milliseconds before the user clicks on the request and by the time the resources have already been requested from the server and loaded. The second approach is implemented in githubInfoLoader

const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

