import { Layout, Typography, Space } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "antd/dist/antd.css";
import "./styles/App.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/kryptoApp/" element={<Homepage />} />

                <Route
                  path="/kryptoApp/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route
                  path="/kryptoApp/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route path="/kryptoApp/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Cryptocurrency <br />
              All rights reserved
            </Typography.Title>
               <Space>
              <Link to="/kryptoApp/">Home</Link>
              <Link to="/kryptoApp/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/kryptoApp/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
