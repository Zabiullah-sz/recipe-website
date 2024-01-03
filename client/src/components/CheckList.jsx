import React from 'react';

export default function CheckList({ values }) {
  return (
    <ul className='check-list'>
      {values.map((value) => (
        <li key={value.nom || value}>
          <input id={value.nom || value} type='checkbox' />
          <label htmlFor={value.nom || value}>{value.nom ? `${value.quantite} ${value.nom}` : value}</label>
        </li>
      ))}
    </ul>
  );
}
