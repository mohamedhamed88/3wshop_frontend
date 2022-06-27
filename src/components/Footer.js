import React from 'react'
import logo from '../assets/images/logo.webp'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          {/* <Col className='text-center py-3'>Copyright &copy; ProShop</Col> */}
          <Col md={12} className='text-center py-3'><img className='fouter' src={logo} alt="logo..." /></Col>
          <Col md={12}className='text-center text-white'>Formations professionnelles pour devenir développeur web et mobile</Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
