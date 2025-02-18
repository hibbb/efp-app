import type { Metadata } from 'next'
import RecommendedCards from './components/recommended-profiles'

export const metadata: Metadata = {
  title: 'Swipe | EFP',
  openGraph: {
    title: 'Swipe | EFP',
    siteName: 'Swipe - Ethereum Follow Protocol',
    description: 'Discover the team behind Ethereum Follow Protocol',
    url: 'https://efp.app/swipe',
    images: [
      {
        url: 'https://efp.app/assets/banners/swipe.png',
      },
    ],
  },
  twitter: {
    images: 'https://efp.app/assets/banners/swipe.png',
  },
}

const SwipePage = () => {
  return (
    <main className='mb-4 w-full px-4 pt-20 text-center sm:pt-8 sm:pl-28 lg:pt-32 xl:pl-36'>
      <RecommendedCards />
    </main>
  )
}

export default SwipePage
