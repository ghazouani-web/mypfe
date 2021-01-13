import React from 'react';
import './Tabs.scss'; 
import {Form ,Button , Col } from 'react-bootstrap';
import Color from './Color'

export default function Tabs() {
    return (
        <div>
        <div className="tabbed">
        <input type="radio" name="tabs" id="tab-nav-1" defaultChecked />
        <label htmlFor="tab-nav-1">Homme</label>
        <input type="radio" name="tabs" id="tab-nav-2" />
        <label htmlFor="tab-nav-2">Femme</label>
        <input type="radio" name="tabs" id="tab-nav-3" />
        <label htmlFor="tab-nav-3">Enfant</label>
        <div className="tabs">
          <div>
           <h2>Homme</h2>
         <Form>
         <Form.Row>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control type="text" placeholder="Nom de l'article" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Control type="number" placeholder="Quantité par piéces" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Control type="number" placeholder="Prix" />
         </Form.Group>
         </Form.Row>
       
         <Form.Row>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="numero serie" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="numero serie" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="numero serie" />
         </Form.Group>
         </Form.Row>
         <Form.Row>
  <Form.Group controlId="formGridAddress2">     
         <Form.Control placeholder="Marque" />
         </Form.Group>
         <Form.Row>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="XS" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="S" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="M" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="L" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="XL" />
         </Form.Group>
         </Form.Row>
         </Form.Row>
  <Color/>
  
  <Button variant="light" type="submit">
    Submit
  </Button>
  
  </Form>
          </div>
          <div><h2>Femme</h2></div>
          <div><h2>Enfant</h2><p></p></div>
        </div>
      </div>
        </div>
    )
}
