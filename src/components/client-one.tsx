'use client';

// import { useState } from 'react';

export const ClientOne = ({ children }: { children: React.ReactDOM }) => {
  // const [name, setName] = useState('one');
  return (
    <>
      <h1>Client One</h1>
      {/* クライアント同士のインポートは問題ない */}
      {/* これはできない。use clientのあるファイルでインポートされたファイルには自動的にuse clientがつく。サーバーをインポートしてしまうとfsモジュールが動作できなくなったため。 */}
      {/* <ServerOne /> */}
      {children}
    </>
  );
};
