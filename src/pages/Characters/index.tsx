import { Button, Card, Container } from "react-bootstrap";
import imageTeste from "../../assets/teste.jpg";

export function Characters() {
  return (
    <Container>
      <section className="py-4 py-lg-5 containter">
        <div className="row justify-content-center align-item-center">
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageTeste} />
              <Card.Body>
                <Card.Title>Luke Skywallker</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageTeste} />
              <Card.Body>
                <Card.Title>Luke Skywallker</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageTeste} />
              <Card.Body>
                <Card.Title>Luke Skywallker</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageTeste} />
              <Card.Body>
                <Card.Title>Luke Skywallker</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </Container>
  );
}