import React from 'react';
import tent from '../../images/tent.jpeg';
import './Reception.css';

const Reception = () => {
  return (
    <section className="row d-flex justify-content-center" id='reception'>
      <div className="vh-100">
        <img
          className="h-75"
          src={tent}
          alt="sky"
        />
      </div>
    </section>
  );
}

export default Reception;