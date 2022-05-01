import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import project1 from '../assets/project1-kjern.png'



function Projects() {
  return (

    <>
    <div className='box-wrapper'>
        <h1>Projects</h1>
        <div className='content'>
          <div className='card-container'>
            <Card className ='single-card'>
              <Card.Img variant="top" src={project1} style={{width: '100%'}} />
              <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className ='single-card'>
              <Card.Img variant="top" src={project1} style={{width: '100%'}} />
              <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className ='single-card'>
              <Card.Img variant="top" src={project1} style={{width: '100%'}} />
              <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className ='single-card'>
              <Card.Img variant="top" src={project1} style={{width: '100%'}} />
              <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className ='single-card'>
              <Card.Img variant="top" src={project1} style={{width: '100%'}} />
              <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
    </div>
    </>

  )
}

export default Projects