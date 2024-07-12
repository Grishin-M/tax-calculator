import { Chart } from '@/components/Chart/Chart';
import { Form } from '@/components/Form/Form';
import { Header } from '@/components/Header/Header';
import { TaxTable } from '@/components/Table/Table';

export default function Home() {
  return (
    <main className="container max-w-screen-xl flex justify-center flex-col h-dvh gap-4">
      <Header />
      <div className='grid grid-cols-2 gap-10'>
        <Form />
        <Chart isLoading={false} />
      </div>
      <div className='grid grid-cols-1'>
        <TaxTable />
      </div>
    </main>
  );
}
