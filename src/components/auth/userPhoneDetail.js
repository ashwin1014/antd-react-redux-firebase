import React, {Component} from 'react';
import { Row, Col, Form, Input, Select,  Button} from 'antd';

const { Option } = Select;

class UserPhoneDetail extends Component {

     state = {
        confirmDirty: false,
      };

      continue = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.props.nextStep();
            console.log('Received values of form: ', values);
          }
        });
      }

     
    render() {
        const { value, handleChange } = this.props;
        const { getFieldDecorator } = this.props.form;
        
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+91',
          })(
            <Select style={{ width: 70 }}>
              <Option value="1">+1</Option>
              <Option value="44">+44</Option>
              <Option value="52">+52</Option>
              <Option value="86">+86</Option>
              <Option value="91">+91</Option>
            </Select>
          );

        return (
            <div className="container">
                <Row>
                   <Col span={12} offset={6}>
                        <Form onSubmit={this.continue}>
                            <Form.Item label="Enter Phone Number">
                                {getFieldDecorator('phone', {
                                 validateTrigger: ["onChange"],
                                //  initialValue: value,
                                 rules: [{ required: true, message: 'Please input your phone number!' }],
                                })(
                                 <Input addonBefore={prefixSelector} 
                                        style={{ width: '100%' }} 
                                        onChange={handleChange('phoneNumber')}
                                  />
                                )}
                            </Form.Item>   
                            <Form.Item>
                               <Button type="primary" htmlType="submit">Confirm</Button>
                            </Form.Item>
                        </Form>
                   </Col>
                </Row>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(UserPhoneDetail);

export default WrappedRegistrationForm