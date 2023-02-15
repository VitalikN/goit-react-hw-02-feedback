import React from 'react';

export const Section = ({ titel, children }) => (
  <>
    <h2> {titel}</h2>
    {children}
  </>
);
