import React from 'react';
import images from '../img/images.js'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typed from 'typed.js';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import cv from '../document/CV-ALEX-PATRON.pdf'



const Presentation = ({ render, locale }) => {


    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        let string = []
        if (locale === "es-ES") {
            string = [
                `<strong>Desarrollador</strong>`,
                `<strong>Diseñador</strong>`,
                `<strong>Mentor</strong>`,
            ]
        } else if (locale === "en-US") {
            string = [
                `<strong>Developer</strong>`,
                `<strong>Designer</strong>`,
                `<strong>Mentor</strong>`,
            ]
        }
        const options = {
            strings: string,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: false
        };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    }, [locale])

    const activeBtnDownLoad = () => {
        const selectBtnDownLoad = document.getElementById('id-btncv')
        console.log(selectBtnDownLoad);
        selectBtnDownLoad.classList.toggle('activeMove')
        // alert('mouse move or click')
    }
    return (
        <div className='contComp marg' id='id-presentation'  >

            <Container>

                <Row>
                    <Col sm={7}>
                        <h1 className='name-title'>
                            <FormattedMessage id='id-Presentation-greeting' defaultMessage='Hi' />
                            <br />
                            <span className='textSpan nameLarge'>
                                <FormattedMessage id='id-Presentation-name' defaultMessage='Alex' />
                            </span>
                        </h1>
                        <p className='paragraph margParr'>
                            <FormattedMessage id='id-Presentation-textPre' defaultMessage='Text Description' />
                        </p>
                        <div className='cont-btnLinkInf'>

                            <a id='id-btncv' className='btn-downloadCv' href="https://www.linkedin.com/in/alex-patron1996/" target="_blank">
                                <img className='imgbtnLink' src={images.lin} alt="" />
                            </a>

                            {/*<a id='id-btncv' className='btn-downloadCv' href={cv} download="CV-ALEX-PATRON.pdf">*/}
                            <a id='id-btncv' className='btn-downloadCv' href="https://drive.google.com/uc?export=download&id=1_R0jPflN_A7Yjn17PkvmEmmeH20jmZLq" download="CV-ALEX-PATRON.pdf">
                                <img className='imgbtnLink' src={images.cvImg} alt="" />
                            </a>

                            <a id='id-btncv' className='btn-downloadCv' href="https://github.com/AlexPatron96" target="_blank">
                                <img className='imgbtnLink' src={images.gitImg} alt="" />
                            </a>

                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className='cont-img-present'>
                            <Image src={render === 'dark' ? images['myAvatar-dark'] : images.myAvatar} className="img-present" onClick={activeBtnDownLoad}></Image>
                            <div className="type-wrap">
                                <span style={{ whiteSpace: 'pre' }} ref={el} className="textSpan">

                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Presentation;
