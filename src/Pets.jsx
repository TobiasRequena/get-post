import { useEffect, useState } from 'react';
import { Button, Flex, Card } from 'antd';
import { getCat, getDog } from './fetch/fetchData';
import { Link } from 'react-router-dom';
import './stilos/pets.css'

function Pets() {
  const [dogImage, setDogImage] = useState(null);
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    fetchCat();
    fetchDog();
  }, []);

  const { Meta } = Card;

  const fetchDog = () => {
    getDog().then((res) => {
      if (res?.status === 200) {
        const { message } = res.data;

        setDogImage(message);
      }
    });
  };

  const fetchCat = () => {
    getCat().then((res) => {
      if (res?.status === 200) {
        const { url } = res.data[0];

        setCatImage(url);
      }
    });
  };

  return (
    <div className='card-container'>
      <Flex gap='small' wrap>
        <Button onClick={fetchDog}>PERRO</Button>
        <Button onClick={fetchCat}>GATO</Button>
      </Flex>
      <div >
        <Flex gap='small' wrap>
          <Card
            hoverable
            style={{ width: '300px', height: '300px' }}
            cover={<img
              alt="gato"
              src={dogImage}
              style={{
                height: '200px',
                objectFit: 'cover'
              }}
            />}
          >
            <Meta title="Perro"/>
          </Card>
          <Card
            hoverable
            style={{ width: '300px', height: '300px' }} 
            cover={<img
              alt="gato"
              src={catImage}
              style={{
                height: '200px',
                objectFit: 'cover'
              }}
            />}
          >
            <Meta title="Gato"/>
          </Card>
        </Flex>
      </div>
      <Link to="/">
        <Button type='primary'>Inicio</Button>
      </Link>
    </div>
  );
}

export default Pets;
