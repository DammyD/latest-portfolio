import React, { useState, useEffect } from 'react'
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Articles from "./Components/Articles"
import Footer from './Components/Footer'

const App = () => {
  // const [colorTheme, setColorTheme] = useState('theme-white');
  // const [showPalette, setShowPalette] = useState(false);

  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem('theme-color');
  //   if (currentThemeColor) {
  //     setColorTheme(currentThemeColor);
  //   }
  // }, []);

  // const handleClick = (theme) => {
  //   setColorTheme(theme);
  //   localStorage.setItem('theme-color', theme);
  // };

  // const handleTogglePalette = () => {
  //   setShowPalette(!showPalette);
  // };

  // return (
  //   <div className={`app ${colorTheme}`}>
  //     <Navbar handleTogglePalette={handleTogglePalette} />
  //     {showPalette && (
  //       <div className='theme-palette'>
  //         <div className='palette-color' onClick={() => handleClick('theme-white')}></div>
  //         <div className='palette-color' onClick={() => handleClick('theme-blue')}></div>
  //         <div className='palette-color' onClick={() => handleClick('theme-orange')}></div>
  //         <div className='palette-color' onClick={() => handleClick('theme-purple')}></div>
  //         <div className='palette-color' onClick={() => handleClick('theme-green')}></div>
  //         <div className='palette-color' onClick={() => handleClick('theme-black')}></div>
  //       </div>
  //     )}
//       <Home />
//       <About />
//       <Projects />
//       <Articles />
//       <Footer />
//     </div>
//   );
// }

    // state
    const [colorTheme, setColorTheme] = useState('theme-white');

    // Effect
    // useEffect (() => {
    //     // check for selected theme in the localstorage
    //     const currentThemeColor = localStorage.getItem('theme-color');
    //     // if found set selected theme value in state
    //     if (currentThemeColor) {
    //         setColorTheme(currentThemeColor);
    //     }
    // }, []);

    // // set theme
    // const handleClick = (theme) => {
    //     setColorTheme(theme);
    //     localStorage.setItem('theme-color', theme);
    // };

  return (
    <>
    <Home/>
    <About/>
    <Projects/>
    <Articles/>
    <Footer/>
  
    </>
  )
}

export default App
