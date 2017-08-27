import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './commons/header';

class App extends React.Component {
  render() {
    return (
      <div>
      <Grid>
        <Row>
          <Col md={4} mdOffset={4} xs={12}>
          <Header />
          {this.props.children}
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
