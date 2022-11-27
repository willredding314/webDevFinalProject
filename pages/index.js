import Head from 'next/head'
import Search from '@/components/Search';
import Featured from '@/components/Featured';

export default function Home() {

  return (
    <main className="grid grid-cols-1 grid-rows-3 h-screen">
      <div className="flex flex-col row-span-1 p-5 gap-20">
        <Search />
      </div> 
      <div className="row-span-2">
        <Featured />
      </div>
    </main>
  )
}
