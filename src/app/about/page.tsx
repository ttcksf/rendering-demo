// 動的レンダリングはユーザーの要求時にルートがレンダリングされる。
// Next.jsは、コンポーネント内でクッキー、ヘッダー、または検索パラメータオブジェクトなどの動的関数に遭遇すると、自動的に動的レンダリングに切り変わる
// .nextフォルダを削除
import { cookies } from 'next/headers';
export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);

  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
