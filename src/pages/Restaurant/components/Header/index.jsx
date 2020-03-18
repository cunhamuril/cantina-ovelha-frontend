import React, { useState, useEffect } from 'react';
import { parseISO, addHours } from 'date-fns';
import { format } from 'date-fns-tz';
import PropTypes from 'prop-types';

import defaultImage from '../../../../assets/images/default.jpg';

import { Container, Thumbnail } from './styles';

const Header = ({ restaurant }) => {
  const [formattedTime, setFormattedTime] = useState('');
  const [formattedAddress, setFormattedAddress] = useState('Sem endereço');
  const [logo, setLogo] = useState(defaultImage);

  const { name, picture, address, schedule } = restaurant;

  useEffect(() => {
    /**
     * Format picture, address and schedule data
     */
    function formatData() {
      if (picture) {
        setLogo('http://' + picture.url);
      }

      if (address) {
        const { number, street, district, city, state } = address[0];
        setFormattedAddress(
          `${street}, ${number || 'S/N'}, ${district}, ${city}-${state}`
        );
      }

      if (schedule) {
        const { from, to } = schedule[0];

        // From
        const parsedFrom = parseISO(from);
        const addedFrom = addHours(parsedFrom, 2);
        const formattedFrom = format(addedFrom, 'HH:mm', {
          timeZone: 'America/Sao_Paulo',
        });

        // To
        const parsedTo = parseISO(to);
        const addedTo = addHours(parsedTo, 2);
        const formattedTo = format(addedTo, 'HH:mm', {
          timeZone: 'America/Sao_Paulo',
        });

        setFormattedTime(`${formattedFrom} às ${formattedTo}`);
      }
    }

    formatData();
  }, [address, picture, schedule]);

  return (
    <Container className="d-flex align-items-center">
      <div style={{ maxWidth: 145, maxHeight: 145 }}>
        <Thumbnail style={{ backgroundImage: `url(${logo})` }} />
      </div>
      <div className="m-3">
        <h3>{name}</h3>
        <p className="mb-2">{formattedAddress}</p>
        <small>
          Segunda à Sexta: <strong>{formattedTime}</strong> <br />
          Sábados: <strong>{formattedTime}</strong> <br />
          Domingo e Feriados: <strong>{formattedTime}</strong>
        </small>
      </div>
    </Container>
  );
};

Header.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default Header;
