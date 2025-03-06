'use client'

import React from 'react'
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { useTranslation } from 'react-i18next'
import { ProfileCard } from '@encrypteddegen/identity-kit'

import ExternalLink from 'public/assets/icons/ui/external-link.svg'
import FollowButton from '#/components/follow-button'

const CompleteProfile = () => {
  const { t } = useTranslation()
  const { address: userAddress } = useAccount()

  return (
    <div className='bg-neutral shadow-medium flex w-full flex-col gap-2 rounded-sm pt-6 pr-1'>
      <h4 className='px-4 text-xl font-bold sm:px-6 sm:text-2xl'>{t('example profile title')}</h4>
      <div className='flex w-full flex-col gap-2 px-4 text-sm sm:w-[90%] sm:px-6 sm:text-base'>
        <p>{t('example profile description')}</p>
        <div className='ml-4 flex flex-col gap-1.5 italic sm:ml-10'>
          <Link
            href='https://ethidentitykit.com/docs/components/profile-card'
            target='_blank'
            className='flex w-fit items-center gap-2 transition-opacity hover:underline hover:opacity-60'
          >
            <p>{t('example profile card link')}</p>
            <ExternalLink className='h-4 w-auto' />
          </Link>
          <Link
            href='https://ethidentitykit.com/docs/api/Users/stats'
            target='_blank'
            className='flex w-fit items-center gap-2 transition-opacity hover:underline hover:opacity-60'
          >
            <p>{t('example profile count link')}</p>
            <ExternalLink className='h-4 w-auto' />
          </Link>
          <Link
            href='https://ethidentitykit.com/docs/api/Users/ens'
            target='_blank'
            className='flex w-fit items-center gap-2 transition-opacity hover:underline hover:opacity-60'
          >
            <p>{t('example profile ens link')}</p>
            <ExternalLink className='h-4 w-auto' />
          </Link>
        </div>
      </div>
      <div className='relative mx-auto mt-3 h-[340px] w-full overflow-hidden sm:h-[420px] 2xl:w-[580px]'>
        <div className='absolute top-0 left-1 z-10 w-full px-2 sm:top-20 sm:left-4 sm:w-[400px]'>
          <ProfileCard
            addressOrName='0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
            connectedAddress={userAddress}
            style={{ width: '100%' }}
            options={{
              followButton: <FollowButton address='0xd8da6bf26964af9d7eed9e03e53415d37aa96045' />,
            }}
            className='shadow-medium'
          />
        </div>
        <div className='absolute top-0 left-32 hidden w-[400px] sm:block 2xl:left-40'>
          <ProfileCard
            addressOrName='0x983110309620d911731ac0932219af06091b6744'
            connectedAddress={userAddress}
            style={{ width: '100%' }}
            options={{
              followButton: <FollowButton address='0x983110309620d911731ac0932219af06091b6744' />,
            }}
            className='shadow-medium'
          />
        </div>
      </div>
    </div>
  )
}

export default CompleteProfile
