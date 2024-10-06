'use client';

import { useState } from 'react';

export const ClientTwo = () => {
  const [name, setName] = useState('two');
  return <h1>Client Two</h1>;
};
