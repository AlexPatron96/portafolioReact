import React from 'react';
import nave from '../img/image-2.gif'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Aboutme = () => {
    return (
        <div data-aos="fade-right" className='contComp'>

            <Container>

                <Row>
                    <h2 className='title'>ABOUT <span className='textSpan AboutMe'>ME</span></h2>
                    <Col sm={12}>
                        <p className='paragraph'>I have always been very cheerful, self-taught and enthusiastic about technology, I like to listen to the opinions of others, learn and share my knowledge with whoever requests it. I am characterized by my adaptability, creative mind and socialization with work teams, continuing to develop myself through continuous learning, improving my skills, acquiring more experience and at all times being willing to go beyond my limitations.</p>
                    </Col>
                    <Col sm={5} className="contColAbout">
                        <div className='cont-img-present'>
                            <Image src={nave} className="imgPage"></Image>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <Row>
                            <Col sm={6}>
                                <h4 className='subtitle'>Education</h4>
                                <div>
                                    <div><i className='bx bxs-calendar'></i> 2022-2022</div>
                                    <h5 className='subtitle-secund'>Full Stack Developer - Academlo</h5>
                                    <h6 className='paragraph'>+700 theoretical-practical course hours.</h6>
                                </div>
                                <div>
                                    <div><i className='bx bxs-calendar'></i> 2014-2022</div>
                                    <h5 className='subtitle-secund'>TIC Engineering - Luis Vargas Torres Technical University</h5>
                                    <h6 className='paragraph'>Final project Group software development</h6>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <h4 className='subtitle'>Experience</h4>
                                <div>
                                    <div><i className='bx bxs-calendar'></i> 2022-2022</div>
                                    <h5 className='subtitle-secund'>EPMAPSE - Public Company</h5>
                                    <h6 className='paragraph'>Project development for the company's medical department</h6>
                                </div>
                                <div>
                                    <div><i className='bx bxs-calendar'></i> 2022-2022</div>
                                    <h5 className='subtitle-secund'>EPMAPSE - Public Company</h5>
                                    <h6 className='paragraph'>Project development for the company's medical department</h6>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Aboutme;