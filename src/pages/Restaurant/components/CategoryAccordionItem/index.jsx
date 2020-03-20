import React from 'react';
import PropTypes from 'prop-types';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// import { Container } from './styles';

import { darken } from '../../../../theme/colors';

const CategoryAccordionItem = ({ category, children }) => (
  <AccordionItem style={{ border: 'none' }}>
    <AccordionItemHeading>
      <AccordionItemButton
        style={{
          backgroundColor: '#FFF',
          borderBottom: `solid 1px ${darken}`,
          paddingBottom: 6,
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}
      >
        <strong>{category.description}</strong>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel className="px-0">
      <div className="d-flex align-items-center justify-content-center flex-wrap pb-4">
        {children}
      </div>
    </AccordionItemPanel>
  </AccordionItem>
);

CategoryAccordionItem.propTypes = {
  category: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default CategoryAccordionItem;
