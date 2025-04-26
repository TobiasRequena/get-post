import { Flex, Button } from 'antd';
import { Link } from 'react-router-dom';
import './stilos/division.css';

export const División = () => {
  return (
    <div className='division'>
      <Flex gap='small' wrap>
        <Link to='/animalitos'>
          <Button> Ver animalitos </Button>
        </Link>
        <Link to='/perfil'>
          <Button> Cargar perfil </Button>
        </Link>
      </Flex>
    </div>
  );
};
