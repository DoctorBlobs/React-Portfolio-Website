import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import '../../App.css';
import '../Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PortfolioSection() {
  const [modalState, setModalState] = useState({});
  
  const handleShowModal = (modalId) => {
    setModalState({ ...modalState, [modalId]: true });
  };

  const handleCloseModal = (modalId) => {
    setModalState({ ...modalState, [modalId]: false });
  };

  return (
    <div>
      <div className="container-portfolio w-container-timeline">
        <div>
          <h3 className="timeline-text">
            A small collection of stuff I've made/worked on.
          </h3>
        </div>

        <div className="cardsholder">
          <Card className="portcard">
            <Card.Img variant="top" src="./Images/ThisCouldBeUs.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal1')}
              >
                More
              </Button>
            </Card.Body>

            <Modal show={modalState['modal1']} onHide={() => handleCloseModal('modal1')}>
              <Modal.Header closeButton>
                <Modal.Title className="modaltext">Modal 1 title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img alt="monke" src="./Images/ThisCouldBeUs.png"/>
                <p>Modal 1 body text goes here.</p>
              </Modal.Body>
            </Modal>
            
          </Card>

          <Card className="portcard">
            <Card.Img variant="top" src="./Images/Cyber.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal2')}
              >
                More
              </Button>
            </Card.Body>

            <Modal show={modalState['modal2']} onHide={() => handleCloseModal('modal2')}>
              <Modal.Header closeButton>
                <Modal.Title className="modaltext">Modal 2 title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 2 body text goes here.</p>
              </Modal.Body>
            </Modal>
            
          </Card>

          <Card className="portcard">
            <Card.Img variant="top" src="./Images/Piano.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal3')}
              >
                More
              </Button>
            </Card.Body>

              <Modal show={modalState['modal3']} onHide={() => handleCloseModal('modal3')}>
              <Modal.Header closeButton>
                <Modal.Title className="modaltext">Modal 3 title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 3 body text goes here.</p>
              </Modal.Body>
            </Modal>

          </Card>

          <Card className="portcard">
            <Card.Img variant="top" src="./Images/Otter.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal4')}
              >
                More
              </Button>
            </Card.Body>

              <Modal show={modalState['modal4']} onHide={() => handleCloseModal('modal4')}>
              <Modal.Header closeButton>
                <Modal.Title className="modaltext">Modal 4 title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 4 body text goes here.</p>
              </Modal.Body>
            </Modal>

          </Card>

          <Card className="portcard">
            <Card.Img variant="top" src="./Images/JumpCat.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal5')}
              >
                More 
              </Button>
            </Card.Body>

              <Modal show={modalState['modal5']} onHide={() => handleCloseModal('modal5')}>
              <Modal.Header closeButton>
                <Modal.Title className="modaltext">Modal 5 title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 4 body text goes here.</p>
              </Modal.Body>
            </Modal>

          </Card>

        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
