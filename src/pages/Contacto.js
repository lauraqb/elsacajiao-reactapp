import React from 'react';
import Navbar from '../components/Navbar';
//import "../styles/main.css";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class Contacto extends React.Component {

    state = {message:""};

    handleChange =(e) => {
      this.setState({
        message : e.target.value
      })
    };

    handleSubmit(e){
        e.preventDefault();
        let data = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
        }
        //const API_URI= "http://localhost:9000/send";
        const API_URI= "https://elsacajiao-api.herokuapp.com/send";
        
        axios.post(API_URI, data)
         .then( res => {
            console.log("enviado");
            //this.setState({ sent: true }, this.resetForm())
         })
         .catch( (err) => {
           console.error(err);
           console.log('Message not sent');
         })
    }

    render() {
        return <div className="ec">
          <Navbar></Navbar>
          <div className="container">
              <br/>
              <Form onSubmit={this.handleSubmit} method="POST">
                  <Form.Group controlId="name">
                      <Form.Label>Nombre (obligatorio)</Form.Label>
                      <Form.Control type="text" placeholder="Nombre" />
                  </Form.Group>
                  <Form.Group controlId="email">
                      <Form.Label>Email (obligatorio)</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="subject">
                      <Form.Label>Asunto</Form.Label>
                      <Form.Control type="text" placeholder="Asunto" />
                  </Form.Group>
                  <Form.Group controlId="message">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control onChange={this.handleChange} as="textarea" rows="3" value={this.state.message}/>
                  </Form.Group>
                  <button onSubmit={this.handleChange} type="submit" className="btn btn-primary">Enviar</button>
              </Form>
          </div>
          <div className="contact-letter-wrapper">
            <div className="contact-letter">{this.state.message}</div>
          </div>
        <br/>
    </div>
    }
}

export default Contacto;
