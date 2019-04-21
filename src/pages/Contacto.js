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
      console.log({value: e.target.value});
      console.log({state: this.state});
    };

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // axios({
        //     method: "POST",
        //     url:"http://localhost:3002/send",
        //     data: {
        //         name: name,
        //         email: email,
        //         messsage: message
        //     }
        // }).then((response)=>{
        //     if (response.data.msg === 'success'){
        //         alert("Message Sent.");
        //         this.resetForm()
        //     }else if(response.data.msg === 'fail'){
        //         alert("Message failed to send.")
        //     }
        // })
    }

    render() {
        return <div className="ec">
          <Navbar></Navbar>
          <div className="container">
              <br/>
              <Form>
                  <Form.Group controlId="name">
                      <Form.Label>Nombre (obligatorio)</Form.Label>
                      <Form.Control type="text" placeholder="Nombre" />
                  </Form.Group>
                  <Form.Group controlId="email">
                      <Form.Label>Email (obligatorio)</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Asunto</Form.Label>
                      <Form.Control type="text" placeholder="Asunto" />
                  </Form.Group>
                  <Form.Group controlId="message">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control onChange={this.handleChange} as="textarea" rows="3" value={this.state.message}/>
                  </Form.Group>
                  <button type="submit" className="btn btn-primary">Enviar</button>
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
