import React from 'react';

// SSG TEST : 아무것도 하지 않으면 SSG!
const SSG = async () => {
  // (1) 첫 번째 방법 : 아무 옵션도 부여 x
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: 'force-cache',
  });
  const data = await response.json();

  return (
    <div className="text-center">
      <h1>SSG</h1>
      <p>{data.fact}</p>
      <p>{data.length}</p>
    </div>
  );
};

export default SSG;
