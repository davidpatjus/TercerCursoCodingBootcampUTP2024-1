import React, { useState, useEffect } from 'react';

function CatFact({ fact }) {
  return (
    <div>
      <h1>FACTOS DE GATOS</h1>
      <p>{fact}</p>
    </div>
  );
}

export default CatFact;
