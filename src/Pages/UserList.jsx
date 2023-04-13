import React, { Component } from 'react'
import AddUserForm from '../Components/formikform/AddUserForm'
import { Col, Container, Row, Table } from 'react-bootstrap'
import './styles.scss'
import { connect } from 'react-redux';
import { addUser, fetchUsers } from '../Services/Slices/UserSlice';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.FetchUsers();
    console.log(this.props.users)
  }

  render() {
    return (
      <div className='user-list-wrapper'>
        <Container>
          <AddUserForm />
          <Row>
            <Col>
              <div className='user-list-details' >
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>City</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  {this.props?.users?.length > 0 && this.props?.users.map((value, index) => {
                    return(
                    <tbody>
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{value.firstname}</td>
                        <td>{value.lastname}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                        <td>{value.city}</td>
                        <td>{value.gender}</td>
                      </tr>
                    </tbody>
                    )
                  })}

                </Table>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    FetchUsers: () => dispatch(fetchUsers()),
    addUser: (values) => dispatch(addUser(values)),


  }
};

const mapStateToProps = (state) => (
  {
    users: state.user.users,
    message: state.user.message
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
