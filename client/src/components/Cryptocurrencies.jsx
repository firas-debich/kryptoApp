import React , {useState,useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import Loading from './Loading';
import { useGetCryptosQuery } from '../Services/CryptoAPI';
const Cryptocurrencies = ({simplified}) => {
    const count = simplified?10:100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
    
        const filteredData = cryptosList?.data?.coins?.filter((item) => item?.name?.toLowerCase().includes(searchTerm));
    
        setCryptos(filteredData);
      }, [cryptosList, searchTerm]);
    
    if(isFetching)return <Loading/>
  return (
      <>
          {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((coin) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={coin.uuid}
          >

            <Link key={coin.uuid} to={`/kryptoApp/crypto/${coin.uuid}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className="crypto-image" src={coin.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(coin.price)}</p>
                <p>Daily Change: {coin.change}%</p>
                <p>Market Cap: {millify(coin.marketCap)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      </>
  )
};

export default Cryptocurrencies;
