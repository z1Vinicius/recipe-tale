
import './App.css'
import PageHeader from './components/Header'
// import { FaChartBar } from 'react-icons/fa6';
import PageFooter from './components/Footer';
import PageBanner from './components/PageBanner';
import ShareRecipeBanner from './components/ShareBanner';

function App() {

  
  return (
    <>
      <PageHeader />  
      <PageBanner />  
      <ShareRecipeBanner />
      <PageFooter />
    </>
  )
}

export default App
