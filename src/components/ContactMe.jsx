import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
const ContactMe = () => {

    const { register, handleSubmit, reset } = useForm();
    const [ response , setResponse ] = useState([])
    
    const submit = data => {
        axios.post("https://formspree.io/f/xqkjrjpj",data)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err.response))
        console.log(data)
    }
    return (
        <div>
            <h2 className='title' >
                {/* <FormattedMessage id='id-aboutme-title1' defaultMessage='ABOUT' />{" "} */}
                ABOUT
                <span className='textSpan AboutMe'>
                    {/* <FormattedMessage id='id-aboutme-title2' defaultMessage='' /> */}
                    ME
                </span>
            </h2>

            <form onSubmit={handleSubmit(submit)}>
                <Container >

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
                                <input type='text' id='message-input' c {...register("message")} placeholder="  " className='form-input' required=" " />
                                <label htmlFor='message-input' className='form-label'>Message:</label>
                                <span className='form-line'></span>
                            </div>
                        </Col>
                    </Row>
                    <button>Submit</button>
                </Container>
            </form>
        </div>
    );
};

export default ContactMe;