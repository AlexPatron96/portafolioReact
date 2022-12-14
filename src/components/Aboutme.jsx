import React from 'react';
import nave from '../img/image-2.gif'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

const Aboutme = () => {
    return (
        <div data-aos="fade-right" className='contComp' id='id-aboutMe'>

            <Container>

                <Row>
                    <h2 className='title'>
                        <FormattedMessage id='id-aboutme-title1' defaultMessage='ABOUT' />{" "}
                        <span className='textSpan AboutMe'>
                            <FormattedMessage id='id-aboutme-title2' defaultMessage='' />
                        </span>
                    </h2>
                    <Col sm={12}>
                        <p className='paragraph'>
                            <FormattedMessage id='id-aboutme-descrip' defaultMessage='Text Description' />
                        </p>
                    </Col>
                    <Col sm={5} className="contColAbout">
                        <div className='cont-img-present'>
                            <Image src={nave} className="imgPage"></Image>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <Row>
                            <Col sm={6}>
                                <h4 className='subtitle'>
                                    <FormattedMessage id='id-aboutme-titleEdu' defaultMessage='Edu' />
                                </h4>
                                <div className='about-contEduExp'>
                                    <div><i className='bx bxs-calendar'></i> 2022-2022</div>
                                    <h5 className='subtitle-secund'>
                                        <FormattedMessage id='id-aboutme-edutitle1' defaultMessage='Edu' />
                                    </h5>
                                    <h6 className='paragraph'>
                                        <FormattedMessage id='id-aboutme-edudesc1' defaultMessage='loading' />
                                    </h6>
                                </div>
                                <div className='about-contEduExp'>
                                    <div><i className='bx bxs-calendar'></i> 2014-2022</div>
                                    <h5 className='subtitle-secund'>
                                        <FormattedMessage id='id-aboutme-edutitle2' defaultMessage='loading' />
                                    </h5>
                                    <h6 className='paragraph'>
                                        <FormattedMessage id='id-aboutme-edudesc2' defaultMessage='loading' />
                                    </h6>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <h4 className='subtitle'>
                                    <FormattedMessage id='id-aboutme-titleExp' defaultMessage='loading' />
                                </h4>
                                <div className='about-contEduExp'>
                                    <div><i className='bx bxs-calendar'></i> 2022-2022</div>
                                    <h5 className='subtitle-secund'>
                                        <FormattedMessage id='id-aboutme-exptitle1' defaultMessage='loading' />
                                    </h5>
                                    <h6 className='paragraph'>
                                        <FormattedMessage id='id-aboutme-expdesc1' defaultMessage='loading' />
                                    </h6>
                                </div>
                                <div className='about-contEduExp'>
                                    <div><i className='bx bxs-calendar'></i> 2022-2022</div>
                                    <h5 className='subtitle-secund'>
                                        <FormattedMessage id='id-aboutme-exptitle1' defaultMessage='loading' />
                                    </h5>
                                    <h6 className='paragraph'>
                                        <FormattedMessage id='id-aboutme-expdesc1' defaultMessage='loading' />
                                    </h6>
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