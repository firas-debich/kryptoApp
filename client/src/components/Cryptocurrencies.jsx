import React , {useState} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../Services/CryptoAPI';
const Cryptocurrencies = ({simplified}) => {
    const count = simplified?10:100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');
    if(isFetching)return "Loading..."
  return (
      <>
      <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map(({uuid,rank,name,iconUrl,price,change,marketCap}) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={uuid}
          >

            <Link key={uuid} to={`/kryptoApp/crypto/${uuid}`}>
              <Card
                title={`${rank}. ${name}`}
                extra={<img className="crypto-image" src={iconUrl} />}
                hoverable
              >
                <p>Price: {millify(price)}</p>
                <p>Daily Change: {change}%</p>
                <p>Market Cap: {millify(marketCap)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      </>
  )
};

export default Cryptocurrencies;
