import { useEffect, useState } from 'react'
import './App.css'
import BarNavegation from './components/BarNavegation'
import Presentation from './components/Presentation'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Proyect from './components/Proyect'
import particles1 from './style/particlesjs-config.json'
import particles2 from './style/particlesjs-config1.json'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import messageES from '../src/lang/es-ES.json'
import messageUS from '../src/lang/en-US.json'
import images from './img/images.js'
import ContactMe from './components/ContactMe'
import FooterPage from './components/FooterPage'

function App() {
    const [messages, setMessages] = useState(messageUS)
    const [locale, setLocale] = useState('en-US')
    const [render, setRender] = useState("white")
    const themeDarkList = document.body.classList
    // console.log(themeDarkList[0]);

    useEffect(() => {
        const localeStorageTheme = localStorage.getItem("theme")
        const localeStorageLang = localStorage.getItem("lang")

        if (localeStorageTheme === 'dark') {
            setRender(localeStorageTheme)
            document.body.classList.add('theme__dark')
        }
        console.log(localeStorageLang);
        if (localeStorageLang === "es-ES") {
            setMessages(messageES)
            setLocale("es-ES")

        } else if (localeStorageLang === "en-US") {
            setMessages(messageUS)
            setLocale("en-US")
        }

        particlesJS(render === "dark" ? particles2 : particles1)
    }, [render])

    // console.log(localStorage.getItem("theme"));
    const btnSwitch2 = document.querySelector('#switch')

    const setLanguage = (lenguage) => {
        // alert('lenguaje seleccionado ' + lenguage)
        if (lenguage === "es-ES") {
            setMessages(messageES)
            setLocale("es-ES")
            localStorage.setItem('lang', "es-ES")

        } else if (lenguage === "en-US") {
            setMessages(messageUS)
            setLocale("en-US")
            localStorage.setItem('lang', "en-US")
        }
    }


    console.log(render);
    const btnSwitch = () => {
        if (render === "dark") {
            setRender("white")
            localStorage.setItem('theme', "white")
            document.body.classList.remove('theme__dark')
        } else {
            localStorage.setItem('theme', "dark")
            setRender("dark")
            document.body.classList.add('theme__dark')
        }
    }

    const switchTheme = document.querySelector('#switch')
    console.log(switchTheme);
    const activeGears = () => {
        const switchTheme = document.querySelector('#switch')
        const lenguageActive = document.querySelector('#lenguage')
        if (lenguageActive.classList[1] === "activeGears") {
            lenguageActive.classList.remove('activeGears')
            switchTheme.classList.remove('switchTheme-active')
        } else {
            lenguageActive.classList.add('activeGears')
            switchTheme.classList.add('switchTheme-active')
        }
        console.log(lenguageActive.classList);
        console.log(switchTheme);
    }



    return (
        <IntlProvider messages={messages} locale={locale}>
            <div>
                <div id="particles-js"></div>
                <BarNavegation ></BarNavegation>
                <Presentation render={render} locale={locale}></Presentation>
                <Aboutme></Aboutme>
                <Skills></Skills>
                <Proyect></Proyect>
                <ContactMe></ContactMe>
                <FooterPage></FooterPage>
                <button className={`switch ${render === "dark" ? 'activeDark switchTheme-active'  :'switchTheme-active'}`} id='switch' onClick={btnSwitch}>
                    <span><i className='bx bxs-sun' ></i></span>
                    <span><i className='bx bxs-moon' ></i></span>
                </button>




                <button onClick={activeGears} className='btnGears'>
                    <i className='bx bx-cog bx-spin' ></i>
                </button>





                <div id='lenguage' className='lenguage'>
                    <button className='btnLenguage' onClick={() => setLanguage("es-ES")}>
                        <img className='imgLenguage' src={images.spain} alt="" /> 
                    </button>
                    <button className='btnLenguage' onClick={() => setLanguage("en-US")}>
                        <img className='imgLenguage' src={images.usa} alt="" />
                    </button>
                </div>
            </div>
        </IntlProvider>
    )
}

export default App
