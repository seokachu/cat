import React from 'react';

async function SSR() {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: 'no-cache',
  });
  const data = await response.json();

  return (
    <div className="text-center">
      <h1>SSR</h1>
      <div>
        <p>fact : {data.fact}</p>
        <p>length : {data.length}</p>
      </div>
    </div>
  );
}

export default SSR;
