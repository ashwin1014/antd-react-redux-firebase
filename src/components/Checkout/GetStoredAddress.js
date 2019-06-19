import React from 'react';
import { Typography, Radio } from 'antd';
import styles from './checkout.module.css';

const { Title, Paragraph } = Typography;

class GetStoredAddress extends React.Component{

    state = {
        value: 1,
      };
    
      onChange = e => {
        this.setState({
          value: e.target.value,
        });
      };

  render() {
    const radioStyle = {
        display: 'block',        
      };

    return (
        <div>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={1}>
                  <Title level={4}>Ashwin Bordoloi, 9912345678</Title>
                  <Paragraph className={styles.address}>
                    Green Skies Blue Forest Appartment, Flat No M03, KrishnaRaju Layout, 
                    Pandunagara, JP Nagar 7th Phase, Kalyani Magnum Infotech Park, 
                    Bangalore, Karnataka - 560076
                 </Paragraph>
                </Radio>
                <Radio style={radioStyle} value={2}>
                <Title level={4}>Ashwin Bordoloi, 9912345678</Title>
                  <Paragraph className={styles.address} >
                    Green Skies Blue Forest Appartment, Flat No M03, KrishnaRaju Layout, 
                    Pandunagara, JP Nagar 7th Phase, Kalyani Magnum Infotech Park, 
                    Bangalore, Karnataka - 560076
                 </Paragraph>
                </Radio>
                <Radio style={radioStyle} value={3}>
                <Title level={4}>Ashwin Bordoloi, 9912345678</Title>
                  <Paragraph className={styles.address}> 
                    Green Skies Blue Forest Appartment, Flat No M03, KrishnaRaju Layout, 
                    Pandunagara, JP Nagar 7th Phase, Kalyani Magnum Infotech Park, 
                    Bangalore, Karnataka - 560076
                 </Paragraph>
                </Radio>                
            </Radio.Group>
        </div>
    )
  }
}

export default GetStoredAddress;