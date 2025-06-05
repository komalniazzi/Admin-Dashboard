import AnalyticsOverview from './_components/AnalyticsOverview'
import Header from './_components/Header'
import Header2 from './_components/Header2'
import SalesFigures from './_components/SalesFigures'
import Sidebar from './_components/Sidebar'

export default function Home () {
  return (
    <div className='flex w-full bg-black'>
      <Sidebar />
      <div className='w-full p-2 bg-black'>
        <Header />
        <Header2 />
        <AnalyticsOverview />
        <SalesFigures />
      </div>
    </div>
  )
}
