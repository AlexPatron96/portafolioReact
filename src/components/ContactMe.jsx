import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as LottiePlayer from "@lottiefiles/lottie-player";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const ContactMe = () => {

    const [modalShow, setModalShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [response, setResponse] = useState([])

    console.log(response);

    const submit = data => {
        axios.post("https://formspree.io/f/xqkjrjpj", data)
            .then(res => setModalShow(res.data.ok))
            .catch(err => console.log(err.response))
        console.log(data)

    }
    return (
        <div>
            <h2 className='title' >
                {/* <FormattedMessage id='id-aboutme-title1' defaultMessage='ABOUT' />{" "} */}
                Contact
                <span className='textSpan AboutMe'>
                    {/* <FormattedMessage id='id-aboutme-title2' defaultMessage='' /> */}
                    ME
                </span>
            </h2>

            <div className='contac-myInfo'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className='myInfo' >
                                <i className='bx bxl-whatsapp bx-lg' ></i>
                                <h4   className='paragraph infotext'>+593 997596531</h4>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='myInfo'>
                                <i className='bx bxl-linkedin bx-lg' ></i>
                                <h4    className='paragraph infotext'>https://www.linkedin.com/in/alex-patron1996/</h4>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='myInfo'>
                                <i className='bx bxl-github bx-lg' ></i>
                                <h4  className='paragraph  infotext'>https://github.com/AlexPatron96</h4>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='myInfo'>
                                <i className='bx bxs-envelope bx-lg' ></i>
                                <h4 className='paragraph infotext'>alex.patron1996@hotmail.com</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <form onSubmit={handleSubmit(submit)} className='cont-row-col'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className='form-group'>
                                <input type='text' id='name-input' {...register("name")} placeholder="  " className='form-input' required=" " />
                                <label htmlFor='name-input' className='form-label'>Name:</label>
                                <span className='form-line'></span>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='form-group'>
                                <input type='email' id='email-input' {...register("email")} placeholder="  " className='form-input' required=" " />
                                <label htmlFor='email-input' className='form-label'>Email:</label>
                                <span className='form-line'></span>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className='form-group'>
                                <input type='text' id='subjet-input' {...register("subjet")} placeholder="  " className='form-input' />
                                <label htmlFor='subjet-input' className='form-label'>Subjet:</label>
                                <span className='form-line'></span>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className='form-group'>
                                <input type='text' id='message-input' {...register("message")} placeholder="  " className='form-input' required=" " />
                                <label htmlFor='message-input' className='form-label'>Message:</label>
                                <span className='form-line'></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <button className='contac-btnsubmit'>Send</button>
            </form>
            <div>

            </div>
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                prueba de modal
            </Button> */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                set={setModalShow}
            />
        </div>
    );
};

export default ContactMe;




