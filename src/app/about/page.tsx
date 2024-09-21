// npx create-next-app@latest アプリ名
// import { useState } from 'react';

export default function AboutPage() {
  // サーバーコンポーネントでこれはできない
  // const [name, setName] = useState('');
  // コンソールはターミナルに表示される（デフォルトでサーバーコンポーネントになっている）
  console.log('サーバーコンポーネント');

  return <h1>About Page</h1>;
}
