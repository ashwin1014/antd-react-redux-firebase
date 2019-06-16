import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const PageNotFound = () => {
    return (
        <div className="container">
             <Title level={3}>The page you are looking for does not exist</Title> <br/>
             <Button type="primary">
                      <Link to={'/home'}>Go To Home Page</Link>
             </Button>
        </div>
    )
}

export default PageNotFound
