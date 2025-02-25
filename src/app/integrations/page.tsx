import type { Metadata } from 'next'

import Guide from './components/guide'
import LiveIntegrations from './components/live-intergrations'
import BackToTop from '#/components/buttons/back-to-top'
import Examples from './components/examples'

export const metadata: Metadata = {
  title: 'Integrations | EFP',
  openGraph: {
    title: 'Integrations | EFP',
    siteName: 'Integrations - Ethereum Follow Protocol',
    description: 'Integrate Ethereum Follow Protocol with your favorite apps',
    url: 'https://efp.app/integrations',
    images: [
      {
        url: 'https://efp.app/assets/banners/integrations.png',
      },
    ],
  },
  twitter: {
    images: 'https://efp.app/assets/banners/integrations.png',
  },
}

const Integrations = () => {
  return (
    <main className='relative flex w-full flex-col justify-between gap-12 pb-24 sm:pb-0 sm:pl-20 lg:flex-row lg:gap-0 lg:pl-[10vw] 2xl:pl-40'>
      <Guide />
      <LiveIntegrations />
      <BackToTop />
      <div className='mx-auto block w-full max-w-[600px] px-4 sm:px-6 lg:hidden'>
        <Examples />
      </div>
    </main>
  )
}

export default Integrations
