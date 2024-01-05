import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import {ThemeProvider} from './context/theme'

function App() {
  const [count, setCount] = useState(0)
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () =>{
    setThemeMode('dark')
  }

  const lightTheme = () =>{
    setThemeMode('light')
  }
  //If we want to trigger any change based on event like onclick or onchange , we can use usestate 
  //But if we want to trigger a re render based on a state change we use useEffect
  useEffect(() => {//'html' targets the root html element of the page
    document.querySelector('html').classList.remove('dark',"light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode , darkTheme , lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
