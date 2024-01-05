import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {  // storing object inside a variable which we will be injecting in root
  type:'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children:'Click me to visit google'
}
//literal HTML
const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
//what react Expects while rendering
const areactElement = React.createElement( // tag name , followed by tag text , followed by the tag text
  'a',
  {href:"https://google.com", target:'_blank'},
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<> 
  //<App />
  //</>  
  areactElement
  //AnotherElement
)
