import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from "react"
import { HomeOutlined, MoneyCollectedOutlined, Bulboutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

// import icon from "../images/cryptocurrensy.png"

const navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" size="large"/>

            <Typography.Title level={2} className="logo">
                <Link to="/"> Cryptoverse</Link>
            </Typography.Title>

            {/* <Button className='menu-control-container'> </Button> */}

        </div>
      
    </div>
  );
}

export default navbar;
