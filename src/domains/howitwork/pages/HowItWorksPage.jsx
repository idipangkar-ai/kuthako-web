import './HowItWorksPage.css'

import Header from '../../../shared/components/Header/Header'
import Footer from '../../../shared/components/Footer/Footer'
import HowItWorksIntro from '../components/HowItWorksIntro/HowItWorksIntro'
import ConnectionOptions from '../components/ConnectionOptions/ConnectionOptions'
import RequestAcceptance from '../components/RequestAcceptance/RequestAcceptance'
import ConnectedFeatures from '../components/ConnectedFeatures/ConnectedFeatures'
import DownloadPrompt from '../components/DownloadPrompt/DownloadPrompt'

function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="how-page">
        <HowItWorksIntro />
        <ConnectionOptions />
        <RequestAcceptance />
        <ConnectedFeatures />
        <DownloadPrompt />
      </main>
      <Footer />
    </>
  )
}

export default HowItWorksPage
