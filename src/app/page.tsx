import { Chart } from '@/components/Chart/Chart';
import { Form } from '@/components/Form/Form';
import { Header } from '@/components/Header/Header';
import { TaxTable } from '@/components/Table/Table';

export default function Home() {
  return (
    <main className="container max-w-screen-xl flex justify-center flex-col gap-4">
      <Header />
      <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-10'>
        <Form />
        <Chart />
      </div>
      <div className='grid grid-cols-1'>
        <TaxTable />
      </div>
    </main>
  );
}
