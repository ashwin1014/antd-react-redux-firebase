import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {  Button, Input, Form,  Radio, Select  } from 'antd';

// const { Title } = Typography; 
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Punjab",
    "Pondicherry",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
 ];

 const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
      <FormItem
        label={label}
        validateStatus={hasError ? "error" : "success"}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Component {...input} {...rest} children={children} />
      </FormItem>
    );
  };

const AInput = makeField(Input);
const ARadioGroup = makeField(RadioGroup);
const ASelect = makeField(Select);
const ATextarea = makeField(TextArea);

const AddressForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
       <Form onSubmit={handleSubmit}>
         <Field name="name" component={AInput} placeholder="Name" hasFeedback />
         <Field name="number" component={AInput} type="number" placeholder="10 digit mobile number" hasFeedback/>
         <Field name="pincode" component={AInput} type="number" placeholder="Pincode" hasFeedback/>
         <Field name="locality" component={AInput} type="text" placeholder="Locality" hasFeedback />
         <Field name="address" component={ATextarea} placeholder="Address (Area and Street)" hasFeedback/>
         <Field name="city" component={AInput} type="text" placeholder="City/District/Town" hasFeedback/>
         <Field label="Select state" name="state" component={ASelect}>
            {
                states.map((state,index)=>{
                    return (
                        <Option value={state} key={index}>{state}</Option>  
                    )
                })
            }      
        </Field>
        <Field label="Address Type" name="sex" component={ARadioGroup} value="male" hasFeedback>
         <Radio value="home">Home (All Day Delivery)</Radio>
         <Radio value="work">Work (Delivery Between 10 AM - 6 PM)</Radio>
       </Field>
       <FormItem>
        <Button type="primary" disabled={pristine || submitting} htmlType="submit" style={{ marginRight: "10px" }}>
          Save and deliver here
        </Button>

        <Button disabled={pristine || submitting} onClick={reset}>
          Reset
        </Button>
      </FormItem>
       </Form>
    )
};

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
  
    return errors;
  };
  
  export default reduxForm({
    form: "addressForm", 
    validate
  })(AddressForm);