import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ titel, children }) => (
  <>
    <h2> {titel}</h2>
    {children}
  </>
);
Section.propTypes = {
  titel: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
