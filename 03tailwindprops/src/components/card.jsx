import React from 'react'

// function Card(props) { // we can use props to access value of parameters like {props.username}
//   console.log(props)

function Card({username = "KU",post= "Not assigned yet"}) { // Ku is the default value of username , if no value is passed then default value will be used
  console.log(username)
  console.log(post)
  return (
    //<div>
    // <img src='https://images.pexels.com/photos/13744812/pexels-photo-13744812.jpeg' alt='' />
    //   <h1 classNameName='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nihil?</p>
    //   card
    //</div>
    <div>
      
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/13744812/pexels-photo-13744812.jpeg" alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center space-y-4"> 
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post}
              </div>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}

export default Card
