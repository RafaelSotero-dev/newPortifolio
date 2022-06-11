import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

  state = {
    ola: 'Olá.',
    eusou: 'Eu sou',
    contact: 'Rafael'
  }



  render() {
    const { ola, eusou, contact } = this.state;
    return (
      <main>
        <div className='conteinerNome'>
          <h1><Link
            to="/about" 
            className='ColorWhite'
            onMouseOver={ (e) => {
              return this.setState({ ola: 'About' })
            } }
            onMouseOut={ (e) => {
              return this.setState({ ola: 'Olá.' })
            } }    
          >
            { ola }
            </Link>
          </h1>
          <h1><Link
            to="/work"
            className='ColorRed'
            onMouseOver={ (e) => {
              return this.setState({ eusou: 'Work' })
            } }
            onMouseOut={ (e) => {
              return this.setState({ eusou: 'Eu sou' })
            } }  
          >
            { eusou }
            </Link>
          </h1>
          <h1><Link
            to="/contact"
            className='ColorRed'
            onMouseOver={ (e) => {
              return this.setState({ contact: 'Contact' })
            } }
            onMouseOut={ (e) => {
              return this.setState({ contact: 'Rafael' })
            } }  
          >
            { contact }
            </Link>
          </h1> 
        </div>
      </main>
  )}
}