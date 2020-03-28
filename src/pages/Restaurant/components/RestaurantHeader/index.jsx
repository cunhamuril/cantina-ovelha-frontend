/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import defaultImage from '../../../../assets/images/default.jpg';

import { Container, Thumbnail } from './styles';

const RestaurantHeader = ({ restaurant }) => {
  const [formattedSchedule, setFormattedSchedule] = useState([]);
  const [formattedAddress, setFormattedAddress] = useState('Sem endereço');
  const [logo, setLogo] = useState(defaultImage);

  const { name, picture, address, schedule } = restaurant;

  useEffect(() => {
    /**
     * Format picture, address and schedule data
     */
    function formatData() {
      if (picture) {
        setLogo(picture.url);
      }

      if (address && address[0]) {
        const { number, street, district, city, state } = address[0];
        setFormattedAddress(
          `${street}, ${number || 'S/N'}, ${district}, ${city}-${state}`
        );
      }

      if (schedule) {
        const arrayDays = [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado',
        ];

        const formatted = schedule.map((item, index) => {
          const { start_day, end_day, from, to } = item;

          const hours = `${from} às ${to}`;
          let days;

          if (start_day === end_day && start_day === 1) {
            days = 'Domingos e Feriados';
          } else if (start_day === end_day && start_day === 7) {
            days = 'Sábados';
          } else if (
            (start_day === 1 && end_day === 7) ||
            (start_day === 7 && end_day === 1)
          ) {
            days = 'Todos os dias';
          } else {
            days = `${arrayDays[start_day - 1]} à ${arrayDays[end_day - 1]}`;
          }

          return { key: index, days, hours };
        });

        setFormattedSchedule(formatted);
      }
    }

    formatData();
  }, [address, picture, schedule]);

  return (
    <Container className="d-flex align-items-center">
      <Thumbnail img={logo} />
      <div className="m-3">
        <h3>{name}</h3>
        <p className="mb-2">{formattedAddress}</p>
        <div className="d-flex flex-column">
          {formattedSchedule.length > 0 &&
            formattedSchedule.map(schedule => (
              <small key={schedule.key}>
                {schedule.days}: <strong>{schedule.hours}</strong>
              </small>
            ))}
        </div>
      </div>
    </Container>
  );
};

RestaurantHeader.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantHeader;
