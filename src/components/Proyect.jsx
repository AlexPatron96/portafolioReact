import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projectsArray from './arrayProject.js'
import images from '../img/images';
import videos from '../video/videos.js';
const Proyect = () => {
    const [projectCarrousel, setProjectCarrousel] = useState([...projectsArray].splice(0, 1))
    const [currentPage, setCurrentPage] = useState(1)
    console.log(projectsArray);

    const handlePageClick = (e) => {
        onPageChange(Number(e.target.id))
        console.log(e.target.id);

    }
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const firstIndex = pageNumber * 1
        setProjectCarrousel([...projectsArray].splice(firstIndex - 1, 1))

    }
    const previousPage = () => {
        const prev = currentPage - 1
        if (prev < 1) {
            setProjectCarrousel([...projectsArray].splice(5, 1))
            setCurrentPage(6)
            return
        }
        const firstIndex = prev * 1
        setProjectCarrousel([...projectsArray].splice(firstIndex - 1, 1))
        setCurrentPage(prev)
    }
    /*===========================================*/
    const nextPag = () => {
        const next = currentPage + 1
        const firstIndex = next * 1
        if (firstIndex > (projectsArray.length / 1) * 1) {

            setProjectCarrousel([...projectsArray].splice(0, 1))
            setCurrentPage(1)
            return
        }
        setProjectCarrousel([...projectsArray].splice(firstIndex - 1, 1))
        setCurrentPage(next)
    }

    const moveMouseVideoHover = () => {
        const capture = document.getElementById('back-video-Data')
        capture.classList.toggle('back-video-active')
        console.log(capture);
    }
    const projectsLists = projectCarrousel.map(projCarrusel => {
        return (
            <div key={projCarrusel.name} className='contCarrouselData'>

                {/* <h4 className='subtitle-secund'>{(projCarrusel.name).toUpperCase()}</h4> */}

                <div className='front-video' onMouseOver={moveMouseVideoHover}>
                    <video className='projectVideoCarrousel' src={`${projCarrusel.video}`} muted loop autoPlay></video>
                </div>
                <div className='back-video' id='back-video-Data'>
                    <h2 className='subtitle-secund titleProBack'>{projCarrusel.name}</h2>
                    <p className='paragraph'>{projCarrusel.description}</p>
                    <h2 className='subtitle-secund titleProBack'>Used Technology</h2>
                    <div className='contUsedTechnologyProject'>
                        {
                            projCarrusel.Tecnologias.map(tec => {
                                return (
                                    <div key={tec.name} className="contImgTitleUsedTec">
                                        <h4 className='subtitle-secund textTecUsed'>{tec.name}</h4>
                                        <img className='imgTecUsed' src={tec.img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h4 className='subtitle-secund titleProBack'>Project Links</h4>
                    <div className='contProjectLinks'>
                        <a className='ProjectLinks' href=""><i className='bx bxl-github bx-lg'></i></a>
                        <a className='ProjectLinks' href=""><i className='bx bxl-linkedin bx-lg'></i></a>
                    </div>
                </div>
            </div>
        )
    })


    const carrouselPage = []
    for (let i = 1; i <= Math.ceil(projectsArray.length / 1); i++) {
        carrouselPage.push(i)
    }


    const allCarrouselProject = carrouselPage.map(page => {
        return (
            <button id={page} key={page} onClick={handlePageClick}
                className={`btn-carrousel ${currentPage === page ? 'activeItem' : null}`}>
                {
                    // projectsArray.filter( proId => Number(proId.id) === page) 
                    // ? <img id={page} className='itemImgCarrousel' src={(projectsArray.filter( proId => Number(proId.id) === page)).indexOf('img')} alt="" />
                    // : <h1>1</h1>
                    console.log((projectsArray.filter(proId => Number(proId.id) === page))[0].img)
                }
                <img id={page} className='itemImgCarrousel' src={(projectsArray.filter(proId => Number(proId.id) === page))[0].img} alt="" />
            </button>
        )
    })


    return (
        <div data-aos="fade-right" className='contComp'>

            <Container>
                <Row>

                    <Col sm={12}>

                        <h2 className='title'><span className='textSpan myProject'>MY </span>PROJECTS</h2>
                    </Col>
                    <Col sm={12} className='cont-Carrousel'>

                        <div className='subtitle-secund titleProBack'>
                            Projects developed with great dedication.
                        </div>
                        {
                            projectsLists
                        }
                        <div className='carrousel-projectItem'>

                            {
                                allCarrouselProject
                            }

                        </div>
                        <button onClick={previousPage} id='btnCarrNextPrev' className='carrousel-btPrev'><i className='bx bxs-left-arrow'></i></button>
                        <button onClick={nextPag} id='btnCarrNextPrev' className='carrousel-btNext'><i className='bx bxs-right-arrow'></i></button>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Proyect;