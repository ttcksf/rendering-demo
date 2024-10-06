'use client';

import { clientSideFunction } from '@/utils/client-utls';
import React from 'react';

export default function Page() {
  const result = clientSideFunction();
  return <h1>クライアント：{result}</h1>;
}
