import React, {Component} from 'react';
import { Row, Col, Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

class UserPhoneConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.props.nextStep();
            console.log('Received values of form: ', values);
          }
        });
      }

      back = e => {
        e.preventDefault();
        this.props.prevStep()
      }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="container">
                <Row>
                   <Col span={12} offset={6}>
                     <Title level={4}>Enter OTP sent to your number</Title>
                     <Form onSubmit={this.continue}>
                        <Form.Item>
                                {getFieldDecorator('username', {
                                  validateTrigger: ["onChange"],
                                  rules: [{ required: true, message: 'Please OTP sent on your phone!' }],
                                 })(
                                 <Input placeholder="Enter OTP" />
                                )}
                       </Form.Item>
                       <Form.Item>
                         <Button type="primary" onClick={this.back} style={{ marginRight: '20px'}}>Re-enter Mobile</Button>
                         <Button type="primary" htmlType="submit">Confirm OTP</Button>
                      </Form.Item>
                     </Form>
                   </Col>
                </Row>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(UserPhoneConfirm);

export default WrappedNormalLoginForm