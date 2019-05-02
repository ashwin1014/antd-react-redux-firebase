import React from 'react';
import { Button, Row, Col } from 'antd';
import './App.css';


const handleClick = () => {
  alert('Hello World')
}

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Row type="flex" justify="center">
            <Col span={24}>
              <Button type="primary" onClick={handleClick}>Click Me!</Button>
            </Col>
        </Row>        
      </div>
    </div>
  );
};

export default App;
