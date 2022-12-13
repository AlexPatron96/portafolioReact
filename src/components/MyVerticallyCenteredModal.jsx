import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as LottiePlayer from "@lottiefiles/lottie-player";


function MyVerticallyCenteredModal(props) {

    setTimeout(()=> {
        props.set(false)
    },5500)
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <lottie-player
                    src="https://lottie.host/f8a8f176-3f62-4ddd-9af0-34e87800b3d4/3J64zVx41g.json"
                    speed="1"
                    style={{ width: "200px", height: "200px" }}
                    mode="normal"
                    
                    autoplay
                ></lottie-player>
            </Modal.Body>
            <Modal.Footer>
                Mail send with succesfull
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;