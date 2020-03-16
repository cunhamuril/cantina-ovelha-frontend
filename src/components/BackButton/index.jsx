import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Container } from './styles';

const BackButton = () => (
  <Link to="/">
    <Container>
      <FaArrowLeft />
    </Container>
  </Link>
);

export default BackButton;
