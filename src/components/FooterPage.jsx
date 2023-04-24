import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cv from '../document/CV-ALEX-PATRON.pdf'
import { FormattedMessage } from 'react-intl';

const FooterPage = () => {

    return (
        <footer >
            <Container>
                <Row>
                    <Col sm={12}>
        {/*<a id='id-btncv' className='btn-downloadCv' href={cv} download="CV-ALEX-PATRON.pdf">*/}
                         <a id='id-btncv' className='btn-downloadCv' href="https://drive.google.com/uc?export=download&id=1_R0jPflN_A7Yjn17PkvmEmmeH20jmZLq" >
                            <button className='contac-btnsubmit dl-contac'><FormattedMessage
                                id='id-footer-downLoad'
                                defaultMessage='loading'
                            /></button>
                        </a>
                    </Col>
                    <Col sm={12} >
                        <p className='copyright'>
                            This page was created by BossDesign <i class='bx bx-copyright'></i>BossDesing. All right reserved.
                        </p>
                    </Col>

                </Row>

            </Container>
        </footer>
    );
};

export default FooterPage;
