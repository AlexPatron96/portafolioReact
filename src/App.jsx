import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../src/style/logoPage.css'
import BarNavegation from './components/BarNavegation'
import Presentation from './components/Presentation'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Proyect from './components/Proyect'
import particles1 from './style/particlesjs-config.json'
import particles2 from './style/particlesjs-config1.json'

function App() {
    const [ render , setRender] = useState(false)
    const themeDarkList = document.body.classList
    console.log(themeDarkList[0]);
    particlesJS(render === true ? particles2 : particles1)

    const btnSwitch2 = document.querySelector('#switch')
    
    const btnSwitch = () => {
        if(render === true){
            setRender(false)

        }else{

            setRender(true)
        }
        document.body.classList.toggle('theme__dark')
    }

    return (
        <div>
            <div id="particles-js"></div>
            <BarNavegation ></BarNavegation>
            <Presentation render={render}></Presentation>
            <Aboutme></Aboutme>
            <Skills></Skills>
            <Proyect></Proyect>
            <button className= {`switch ${render ? 'active': ''}`} id='switch' onClick={btnSwitch}>
                <span><i className='bx bxs-sun' ></i></span>
                <span><i className='bx bxs-moon' ></i></span>
            </button>
        </div>
    )
}

export default App
