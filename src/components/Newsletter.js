import { Col, Row} from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx ">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates.</h3>
            </Col>
            <Col md={6} xl={7}>
              
                <div className="new-email-bx">
                  <input type="email"placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              
            </Col>
          </Row>
        </div>
      </Col>
  )
}
