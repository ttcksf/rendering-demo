import { serverSideFunction } from '@/utils/server-utils';

export default function Page() {
  const result = serverSideFunction();
  return <h1>ServerPage:{result}</h1>;
}
