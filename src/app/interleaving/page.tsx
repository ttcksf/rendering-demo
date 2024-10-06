import { ClientOne } from '@/components/client-one';
import { ServerOne } from '@/components/server-one';

export default function Interleaving() {
  return (
    <>
      <h1>Interleaving</h1>
      {/* propsとして渡すことでクライアントでサーバーをインポートできる */}
      <ClientOne>
        <ServerOne />
      </ClientOne>
    </>
  );
}
