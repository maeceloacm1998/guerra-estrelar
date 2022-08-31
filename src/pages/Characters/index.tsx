import { useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BoxBorder } from "../../components/BoxBorder";

export function Characters() {
  const { id } = useParams()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [repositoriesCharacters, setRepositoriesCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`).then(response => response.json()).then(data => setRepositoriesCharacters(data))
  }, []);

  const characters = repositoriesCharacters.result

  const handleClose = () => setIsModalVisible(false);
  const handleOpenModal = () => setIsModalVisible(true);

  return (
    <Container>
      <BoxBorder>
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button onClick={handleOpenModal} variant="primary">Detalhes</Button>
            </Card.Body>
          </Card>
        </>

      </BoxBorder>


      <Modal show={isModalVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do personagem</Modal.Title>
        </Modal.Header>
      </Modal>

    </Container>
  );
}