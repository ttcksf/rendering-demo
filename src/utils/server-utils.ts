import 'server-only';
// npm i server-only

export const serverSideFunction = () => {
  console.log('サーバー処理');
  return 'server result';
};
