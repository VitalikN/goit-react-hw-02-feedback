import React from 'react';
import PropTypes from 'prop-types';
import { Titel } from './Section.styled';
export const Section = ({ titel, children }) => (
  <>
    <Titel> {titel}</Titel>
    {children}
  </>
);
Section.propTypes = {
  titel: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
