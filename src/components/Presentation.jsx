import React from 'react';
import images from '../img/images.js'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typed from 'typed.js';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

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


    return (
        <div className='contComp marg'  >

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
                        <p className='paragraph'>
                            <FormattedMessage id='id-Presentation-textPre' defaultMessage='Text Description' />
                        </p>
                    </Col>
                    <Col sm={5}>
                        <div className='cont-img-present'>
                            <Image src={render ? images['myAvatar-dark'] : images.myAvatar} className="img-present"></Image>
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
{/* <p className='pag-parr'>Soy un desarrollador web enfocado en el front-end, desarrollo de aplicaciones y plataformas web, estoy dispuesto a aprender y mejorar mis habilidades, creando proyectos, logrando retos y con mucho entusiasmo, dar todo mis conocimientos en beneficio de quien lo solicite.</p> */ }
{/* <h3 className='pag-subtitle'>Developer</h3> */ }
{/* <h2 className='pag-title'>Bienvenido a mi portafolio</h2> */ }