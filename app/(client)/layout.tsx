import Header from '@/components/layout/header';
import React from 'react'


const layout =  ({
children,
}: {
  children: React.ReactNode;
})=>{
  return (
    <main className='h-full'>
      <Header/>
      <section className='min-h-[80vh] px-20 pt-1'>
        {children}
      </section>

    </main>
  )
}

export default layout
