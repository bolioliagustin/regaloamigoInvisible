import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
function MyButton() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="primero">1° Pista</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="segundo">2° Pista</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tercero">3° Pista</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="primero">
                <div className="text">
                  En parte el a ver hecho esto creo que ya es una pista asi que
                  lo tomare como pista.
                  <img
                      className="carousel-responsive3"
                      src="/meme1.jpg"
                      alt="lol"
                    />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="segundo">
                <div className="text">
                  Nuestros nombres son bastante parecidos pero muy pocas veces
                  me llaman por el mio.
                  <img
                      className="carousel-responsive2"
                      src="/meme2.jpg"
                      alt="lol"
                    />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="tercero">
                <div className="text">
                Que hermosa bandera
                  <div>
                    <img
                      className="carousel-responsive1"
                      src="/parallax1.jpg"
                      alt="lol"
                    />
                    <h3>
                      Wee se hacia el re misterioso con la foto. Te doy una
                      extra, mido mas de 1.80m.
                    </h3>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default MyButton;
