import React, {Component} from 'react';
import UserPhoneDetail from './userPhoneDetail';
import UserPhoneConfirm from './userPhoneConfirm';
import AppLayout from '../AppLayout/AppLayout';

class UserForm extends Component {

    state = {
        step: 1,
        phoneNumber: null
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step, phoneNumber } = this.state;
        const values = {phoneNumber}
       
        switch(step) {
            case 1:
                return (
                    <UserPhoneDetail nextStep={this.nextStep} handleChange={this.handleChange} value={values}/>
                )
            
            case 2:
               return (
                   <UserPhoneConfirm prevStep={this.prevStep} nextStep={this.nextStep}/>
               )

            default: return  <AppLayout/>
        }
    }
}


export default UserForm