import fs from 'fs';

export const ServerOne = () => {
  fs.readFileSync('src/components/server-one.tsx', 'utf-8');
  return (
    <>
      <h1>Server One</h1>
      {/* サーバー同士のインポートは問題ない */}
      {/* サーバーがクライアントをインポートすることも問題ない */}
    </>
  );
};
