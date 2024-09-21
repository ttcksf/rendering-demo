'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [name, setName] = useState('');
  console.log('クライアント');

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
}
