import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png"
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={"large"} />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto</Link>
        </Typography.Title>
        {/*  <Button className='menu-control-container'>

  </Button>*/}
      </div>
      <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/kryptoApp/">Home </Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/kryptoApp/cryptocurrencies">Cryptocurrencies </Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/kryptoApp/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/kryptoApp/news">News </Link>
            </Menu.Item>    

      </Menu>
    </div>
  );
};

export default Navbar;
