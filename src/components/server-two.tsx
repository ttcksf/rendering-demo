import fs from 'fs';

export const ServerTwo = () => {
  fs.readFileSync('src/components/server-two.tsx', 'utf-8');
  return <h1>Server Two</h1>;
};
