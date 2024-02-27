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
          <h1 className="timeline-text" style={{fontWeight: 'bold'}}>
            &gt; A small collection of stuff I've made & worked on
          </h1>
        </div>

        <div>
          <h3 className="timeline-text-domin">
            /Games/Media/
          </h3>
        </div>
          <div className="cardsholder">
          <Card className="portcard">
            <Card.Img variant="top" src="./Images/Godot.jpg" />
            <Card.Body>
              <Card.Title>Godot Games</Card.Title>
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
                <Modal.Title className="modaltext">Godot Games</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 2 body text goes here.</p>
              </Modal.Body>
            </Modal>     
          </Card>

          <Card className="portcard">
            <Card.Img variant="top" src="./Images/Unity.jpg" />
            <Card.Body>
              <Card.Title>Unity VR Games</Card.Title>
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
                <Modal.Title className="modaltext">Unity (VR) Games</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 3 body text goes here.</p>
              </Modal.Body>
            </Modal>

          </Card>

          <Card className="portcard">
            <Card.Img variant="top" src="./Images/Blender.jpg" />
            <Card.Body>
              <Card.Title>Blender Animations & Modelling</Card.Title>
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
                <Modal.Title className="modaltext">Blender Animations & Modelling</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 4 body text goes here.</p>
              </Modal.Body>
            </Modal>
          </Card>
        </div>

        <div>
          <h3 className="timeline-text-domin">
            /Technical/
          </h3>
        </div>

        <div className='cardsholder'>
          <Card className="card">
            <Card.Body>
              <Card.Title>China's Surveillance systems: a paper</Card.Title>
              <Card.Text>
                    I wrote a paper about China's surveillance system with somebody as my final end 'dissertation' for School
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal1')}
              >
                More
              </Button>
            </Card.Body>
            <Card.Img variant="top" src="./Images/Dissertation.png" />


            <Modal className="modaldialouge" show={modalState['modal1']} onHide={() => handleCloseModal('modal1')}>
              <Modal.Header closeButton>
                <Modal.Title className="modaltext">Camera Face Recognition</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img alt="monke" src="./Images/Dissertation.png"/>
                <p>Modal 1 body text goes here.</p>
              </Modal.Body>
            </Modal>
            
          </Card>

          <Card className="portcard">
            <Card.Img variant='top' src='./Images/Pain.jpg'></Card.Img>
            <Card.Body>
              <Card.Title>VU C++ Course</Card.Title>
              <Card.Text>
                An Introducion to C++ from the Vrije Universiteit (Free University) based in Amsterdam
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
                <Modal.Title className="modaltext">VU C++ Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal 4 body text goes here.</p>
                <p>image from u/0xTJ</p>
              </Modal.Body>
            </Modal>

          </Card>

          <Card className="card">
              <Card.Body>
              <Card.Title>Camera Face Recognition</Card.Title>
              <Card.Text>
                    I made a Facial Recognition program, using a Tensorflow algorithm from https://github.com/davidsandberg/facenet
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal1')}
              >
                More
              </Button>
            </Card.Body>
            <Card.Img variant="top" src="./Images/FaceRec.png" />


            <Modal className="modaldialouge" show={modalState['modal1']} onHide={() => handleCloseModal('modal1')}>
              <Modal.Header closeButton>
                <Modal.Title className="modaltext">Camera Face Recognition</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img alt="monke" src="./Images/FaceRec.png"/>
                <p>Modal 1 body text goes here.</p>
              </Modal.Body>
            </Modal>
            
          </Card>
          </div>

        <div>
          <h3 className="timeline-text-domin">
            /Other/
          </h3>
        </div>

          <div className='cardsholder'>
          <Card className="portcard">
            <Card.Img variant="top" src="./Images/Website.jpg" />
            <Card.Body>
              <Card.Title>Multiple Websites (HTML, CSS, JS & React)</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleShowModal('modal4')}>
                More
              </Button>
            </Card.Body>

            <Modal show={modalState['modal4']} onHide={() => handleCloseModal('modal4')}>
            <Modal.Header closeButton>
              <Modal.Title className="modaltext">Multiple Websites (HTML, CSS, JS & React)</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
              <p>Modal 4 body text goes here.</p>
              <a href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer">
              <Button>
                More
              </Button>
              </a>
              
            </Modal.Body>
          </Modal>
          </Card>
        </div>
        </div>
      </div>

  );
}

export default PortfolioSection;
