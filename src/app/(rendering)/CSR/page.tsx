'use client';

import { Cat } from '@/types/page';
import React, { useEffect, useState } from 'react';

function CSR() {
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const data = await response.json();
      setCat(data);
    };
    fetchCat();
  }, []);

  if (!cat) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>CSR</h1>
      <div>
        <p>fact : {cat.fact}</p>
        <p>length : {cat.length}</p>
      </div>
    </div>
  );
}

export default CSR;
