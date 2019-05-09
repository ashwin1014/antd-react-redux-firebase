import React, {Component} from 'react';
import { Row, Col, Form, Input, Button, Typography } from 'antd';
import { Redirect } from 'react-router-dom';

const { Title } = Typography;

class UserPhoneConfirm extends Component {

    state = {
      fireRedirect: false
    }

    back = e => {
      e.preventDefault();
      this.props.prevStep()
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);     
            this.setState({ fireRedirect: true })     
          }
        });
      }


    render() {
        const { getFieldDecorator } = this.props.form;
        const { fireRedirect } = this.state;

        return(
            <div className="container">
                <Row>
                   <Col span={12} offset={6}>
                     <Title level={4}>Enter OTP sent to your number</Title>
                     <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                                {getFieldDecorator('otp', {
                                  validateTrigger: ["onChange"],
                                  rules: [{ required: true, message: 'Enter OTP sent on your phone!' }],
                                 })(
                                 <Input placeholder="Enter OTP" />
                                )}
                       </Form.Item>
                       <Form.Item>
                         <Button type="primary" onClick={this.back} style={{ marginRight: '20px'}}>Re-enter Mobile</Button>
                         <Button type="primary" htmlType="submit">Confirm OTP</Button>
                      </Form.Item>
                     </Form>
                     {fireRedirect && (
                      <Redirect to='/Home' />
                    )}
                   </Col>
                </Row>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(UserPhoneConfirm);

export default WrappedNormalLoginForm