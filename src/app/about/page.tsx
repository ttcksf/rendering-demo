// 静的レンダリングは、アプリケーションのビルド時にHTMLページを生成する方法
// ウェブページに必要なすべてのデータが事前に準備されるためパフォーマンスが向上する
// .nextフォルダを削除しておく
// npm run buildを実行
// npm run startを実行（デフォルトでキャッシュが有効化されている）
export default function AboutPage() {
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
