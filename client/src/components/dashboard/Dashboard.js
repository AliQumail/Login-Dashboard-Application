import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container className="">
      <Row className="row-1">
        <Col className="col-1" xl={3}>
          <h6 className="col-1-heading">Email </h6>
          <p className="col-1-info">ali@gmail.com</p>
          <h6 className="col-1-heading">Age</h6>
          <p className="col-1-info">43</p>
          <h6 className="col-1-heading">Gender</h6>
          <p className="col-1-info">Male</p>
          <h6 className="col-1-heading">Nationality</h6>
          <p className="col-1-info">Pakistan</p>
        </Col>
        <Col className="col-2" xl={9}>
          <h3 className="name">Ali Ahmed</h3>
          <hr/>
          <Row className="username-password">
            <Col xl={6}>username : <span className="up-info">Ali121</span></Col> 
            <Col>password : <span className="up-info">3212313</span></Col>
          </Row>
          <hr/>
          <h6 className="address-head">Current Address</h6>
          <p className="address-info"> 321, H7, Town X, Islamabad</p>
          <hr/>
          <h6 className="address-head">Home Address</h6>
          <p> 321, H7, Town X, Islamabad </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
