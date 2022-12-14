import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AllSkillArray from './arraySkill.js'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

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
        <div data-aos="fade-left" className='contComp' id='id-skills'>

            <Container>
                <Row>

                    <h2 className='title'>
                        <span className='textSpan Skillme'>
                            <FormattedMessage id='id-skills-title1' defaultMessage='Loading' />
                        </span>{' '}
                        <FormattedMessage id='id-skills-title2' defaultMessage='Loading' />
                    </h2>
                    <Col sm={12} className="skill-contButton">-
                        <ButtonGroup>
                            <Button variant="outline-info" id='btn-person' onClick={buttonFront}>
                                <FormattedMessage id='id-skills-btnFrt' defaultMessage='Loading' />
                            </Button>
                            <Button variant="outline-dark" id='btn-person' onClick={buttonAll}>
                                <FormattedMessage id='id-skills-btnAll' defaultMessage='Loading' />
                            </Button>
                            <Button variant="outline-info" id='btn-person' onClick={buttonBack}>
                                <FormattedMessage id='id-skills-btnBak' defaultMessage='Loading' />
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col sm={12} className="skill-contSkllItem" >
                        <div>

                            {
                                skills.map(obj => (
                                    <div key={obj.name} data-aos="zoom-in">

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="button-tooltip-2">
                                                <FormattedMessage id={obj.description} defaultMessage='Loading' />
                                            </Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <button
                                                    variant="light"
                                                    {...triggerHandler}
                                                    id="butSkill"
                                                    className="skills-btnItem"
                                                >
                                                    <Image
                                                        className='imgSkill'
                                                        ref={ref}
                                                        src={obj.img}
                                                    />
                                                    <span className="ms-1 nameSkill">{obj.name}</span>
                                                </button>
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