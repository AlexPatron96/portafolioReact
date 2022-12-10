import React from 'react';
import images from '../img/images.js'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typed from 'typed.js';

const Presentation = ({render}) => {


    const el = React.useRef(null);
    const typed = React.useRef(null);
    React.useEffect(() => {
        const options = {
            strings: [
                '<strong>Developer</strong>',
                '<strong>Designer</strong>',
                '<strong>Mentor</strong>'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: false
        };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    }, [])


    return (
        <div className='contComp marg'  >

            <Container>

                <Row>
                    <Col sm={7}>
                        <h1 className='name-title'>Hi, I'am <br /> <span className='textSpan nameLarge'>Alex Patron</span></h1>
                        <p className='paragraph'>I design and code beautifully simple things, and I love what I do.</p>
                    </Col>
                    <Col sm={5}>
                        <div className='cont-img-present'>
                            <Image src={render ? images['myAvatar-dark'] : images.myAvatar} className="img-present"></Image>
                            <div className="type-wrap">
                                <span style={{ whiteSpace: 'pre' }} ref={el} className="textSpan" />
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