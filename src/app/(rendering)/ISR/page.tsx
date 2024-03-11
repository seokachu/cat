import React from 'react';

const ISR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json();
  return (
    <div>
      <h1>ISR</h1>
      <p>fact : {data.fact}</p>
      <p>length : {data.length}</p>
    </div>
  );
};

export default ISR;
