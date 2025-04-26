import React, { useState } from 'react';
import { ToolOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Input, message } from 'antd';
import axios from 'axios';
import './stilos/perfiles.css';
import { Link } from 'react-router-dom';

export const Perfiles = () => {
  const [user, setUser] = useState('');
  const [profesion, setProfesion] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [perfilCreado, setPerfilCreado] = useState(null);

  const getRandomNumber = (min = 1, max = 1000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = async () => {
    if (!user || !profesion) {
      message.warning('Por favor, completa todos los campos.');
      return;
    }

    try {
      setLoading(true);

      const randomSeed = getRandomNumber();
      const avatarUrl = `https://api.dicebear.com/7.x/miniavs/svg?seed=${randomSeed}`;
      setAvatar(avatarUrl);

      const config = {
        method: 'POST',
        url: 'https://reqres.in/api/users',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        data: {
          name: user,
          job: profesion
        }
      };

      const response = await axios(config);
  
      console.log('Respuesta de la API:', response.data);

      setPerfilCreado(response.data); // <-- Guardamos el perfil

      message.success('Perfil cargado correctamente');
      setUser('');
      setProfesion('');
    } catch (error) {
      console.error('Error al cargar el perfil:', error);
      message.error('Hubo un error al cargar el perfil');
    } finally {
      setLoading(false);
    };
  }

  return (
    <div className='perfiles-container'>
      <div>
        <Flex gap='small' wrap>
            <Input 
              size='large' 
              placeholder='Nombre' 
              prefix={<UserOutlined />} 
              value={user}
              onChange={(e) => setUser(e.target.value)}  
            />
            <Input 
              size='large' 
              placeholder='Profesión' 
              prefix={<ToolOutlined />} 
              value={profesion}
              onChange={(e) => setProfesion(e.target.value)}
            />
        </Flex>
      </div>
      {perfilCreado && (
        <div className="perfil" style={{ marginTop: 20 }}>
          <Card
            title={perfilCreado.name}
            cover={<img alt="avatar" src={avatar} style={{ width: 120, margin: 'auto', paddingTop: 10 }} />}
          >
            <p><strong>Profesión:</strong> {perfilCreado.job}</p>
            <p><strong>ID generado:</strong> {perfilCreado.id}</p>
            <p><strong>Fecha de creación:</strong> {new Date(perfilCreado.createdAt).toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
          </Card>
        </div>
      )}
      
      <div className="button-container">
          <Button
            type="primary"
            onClick={handleSubmit}
            loading={loading}
          >
            Cargar Perfil
          </Button>
        <Link to="/">
          <Button>Inicio</Button>
        </Link>
      </div>
    </div>
  );
};
