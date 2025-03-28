import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveLink, GitHubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="imgpro" src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button className="linkBtn1">Live Demo</button>
          </a>
          <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
            <button className="linkBtn1">GitHub</button>
          </a>
        </div>
      </div>
    </Col>
  )
}
