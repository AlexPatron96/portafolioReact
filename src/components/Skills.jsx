import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import images from '../img/images.js'
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AllSkillArray from './arraySkill.js'

const Skills = () => {


    const [skills, setSkills] = useState(AllSkillArray)

    const buttonFront = () => {
        const filter = AllSkillArray.filter(obj => obj.area[0] === "Front-End" || obj.area[1] === "Front-End")
        setSkills(filter)
    }
    const buttonBack = () => {
        const filter = AllSkillArray.filter(obj => obj.area[0] === "Back-End" || obj.area[1] === "Back-End")
        console.log(filter);
        setSkills(filter)
    }
    const buttonAll = () => {
        setSkills(AllSkillArray)
    }


    return (
        <div data-aos="fade-left" className='contComp'>

            <Container>
                <Row>

                    <h2 className='title'><span className='textSpan Skillme'>MY</span> SKILLS</h2>
                    <Col sm={12} className="skill-contButton">-
                        <ButtonGroup>
                            <Button variant="outline-info" id='btn-person' onClick={buttonFront}>Front-End</Button>
                            <Button variant="outline-dark" id='btn-person' onClick={buttonAll}>All</Button>
                            <Button variant="outline-info" id='btn-person' onClick={buttonBack}>Back-End</Button>
                        </ButtonGroup>
                    </Col>
                    <Col sm={12} className="skill-contSkllItem">
                        <div>

                            {
                                skills.map(obj => (
                                    <div key={obj.name}>

                                        <OverlayTrigger
                                            placement="top"

                                            overlay={<Tooltip id="button-tooltip-2">{obj.description}</Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <Button
                                                    variant="light"
                                                    {...triggerHandler}
                                                    id="butSkill"
                                                    className="d-inline-flex align-items-center "
                                                >
                                                    <Image
                                                        className='imgSkill'
                                                        ref={ref}
                                                        src={obj.img}
                                                    />
                                                    <span className="ms-1 nameSkill">{obj.name}</span>
                                                </Button>
                                            )}
                                        </OverlayTrigger>
                                    </div>
                                ))
                            }
                        </div>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default Skills;