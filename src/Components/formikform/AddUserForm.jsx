import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../styles.scss'
import UserModal from '../modal-popup/UserModal';

export default class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div className='sign-up-wrapper'>
        <div className='add-user-btn'>
          <Button variant='primary' onClick={this.handleShow} >Add User</Button>
        </div>
        <Container>
          <div className='sing-up-container'>
            <Row className='d-flex justify-content-center mt-5'>
              <Col md={6}>
                <UserModal
                  handleClose={this.handleClose}
                  show={this.state.show}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}



