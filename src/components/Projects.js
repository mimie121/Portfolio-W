import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Car Renting Website.",
      
      description: "Design & Development",
      imgUrl: projImg1,
      liveLink: "https://mimie121.github.io/CarRentalService/",
    GitHubLink: "https://github.com/mimie121/CarRentalService"
    },
    {
      
      title: "Dr Appointment Booking.🏥",
      description: "Design & Development",
      imgUrl: projImg2,
      liveLink:"https://mimie121.github.io/Hospital-Project/",
      GitHubLink:"https://github.com/mimie121/Hospital-Project"
    },
    {
      title: "Food E-Commerce Website.",
      description: "Design & Development",
      imgUrl: projImg3,
       liveLink:"https://mimie121.github.io/react-ecommerce-main/",
      GitHubLink:"https://github.com/mimie121/react-ecommerce-main/tree/main/react-ecommerce"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}

