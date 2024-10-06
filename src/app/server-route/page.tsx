import { serverSideFunction } from '@/utils/server-utils';

// import { clientSideFunction } from '@/utils/client-utls';

export default function Page() {
  const result = serverSideFunction();
  // const result = clientSideFunction();
  return <h1>ServerPage:{result}</h1>;
}
