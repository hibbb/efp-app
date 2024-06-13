'use client'

import { Avatar } from '../avatar'
import { useAccount } from 'wagmi'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { truncateAddress } from '#/lib/utilities'
import LoadingProfileCard from './loading-profile-card'
import { FollowButton } from '#/components/follow-button'
import DefaultAvatar from 'public/assets/art/default-avatar.svg'
import type { FollowingResponse, ProfileDetailsResponse } from '#/api/requests'

interface Props {
  isResponsive?: boolean
  hideFollowButton?: boolean
  profile?: ProfileDetailsResponse | null
  following?: FollowingResponse[]
  borderColor?: string
  isLoading?: boolean
}

export function UserProfileCard({
  isResponsive = true,
  hideFollowButton,
  profile,
  borderColor,
  isLoading,
  following
}: Props) {
  const pathname = usePathname()
  const { address: connectedAddress } = useAccount()
  const { t } = useTranslation('common', { keyPrefix: 'profile card' })

  const isConnectedUserCard = pathname === '/' || pathname.includes('/profile')

  const isProfileValid = !(
    Object.keys(profile || {}).includes('response') ||
    Object.keys(profile || {}).includes('message')
  )

  return (
    <div
      className={`flex glass-card ${
        isResponsive ? 'xl:w-76 w-full 2xl:w-86 py-3 px-4 sm:p-6' : 'w-86 p-6'
      } border-2 justify-center flex-col ${borderColor || 'border-[#FFDBD9]'} rounded-xl relative`}
    >
      {isLoading ? (
        <LoadingProfileCard isResponsive={isResponsive} />
      ) : profile && isProfileValid ? (
        <>
          <div
            className={`text-gray-500 absolute ${
              isResponsive ? 'text-right xl:text-left' : 'text-left'
            } px-2 w-full left-0 top-1 font-semibold`}
          >
            #{profile?.primary_list ?? '-'}
          </div>
          <div className='flex w-full xl:items-center flex-col gap-5 sm:gap-6 md:gap-9 pt-2'>
            <div
              className={`flex w-full ${
                isResponsive ? 'flex-row xl:flex-col xl:justify-center' : 'flex-col justify-center'
              } items-center gap-4`}
            >
              <Avatar
                avatarUrl={profile.ens?.avatar || DefaultAvatar}
                name={profile.ens?.name || profile.address}
                size={
                  isResponsive
                    ? 'h-[70px] w-[70px] sm:h-[75px] sm:w-[75px] xl:h-[100px] xl:w-[100px]'
                    : 'h-[100px] w-[100px]'
                }
              />
              <div
                className={`flex w-full ${
                  isResponsive ? 'xl:items-center items-start' : 'items-center'
                } flex-col gap-2 justify-center`}
              >
                <div
                  className={` ${
                    isResponsive
                      ? 'w-[90%] xl:w-full xl:max-w-72 2xl:max-w-[332px] sm:text-2xl text-xl text-start xl:text-center'
                      : 'w-full max-w-[332px] text-2xl text-center'
                  } truncate  font-bold`}
                >
                  {profile.ens?.name || truncateAddress(profile.address)}
                </div>
                {following && connectedAddress
                  ? following
                      ?.map(follower => follower.data.toLowerCase())
                      .includes(connectedAddress.toLowerCase()) && (
                      <div className='rounded-full font-bold text-[10px] mb-1 flex items-center justify-center bg-gray-300 h-5 w-20'>
                        {t('follows you')}
                      </div>
                    )
                  : null}
                {!hideFollowButton && profile.address && <FollowButton address={profile.address} />}
              </div>
            </div>
            <div
              className={`flex w-full flex-wrap ${
                isResponsive
                  ? 'justify-between sm:justify-start xl:justify-center gap-0 sm:gap-y-10 sm:gap-x-16'
                  : 'gap-y-10 gap-x-16 justify-center'
              }  items-center mx-autotext-center`}
            >
              <div>
                <div className={`${isResponsive ? 'text-xl sm:text-2xl' : 'text-2xl'} font-bold`}>
                  {profile.stats === undefined ? '-' : profile.stats.following_count}
                </div>
                <div
                  className={`${isResponsive ? 'sm:text-lg' : 'text-lg'} font-bold text-gray-500`}
                >
                  {t('following')}
                </div>
              </div>
              <div>
                <div className={`${isResponsive ? 'text-xl sm:text-2xl' : 'text-2xl'} font-bold`}>
                  {profile.stats === undefined ? '-' : profile.stats.followers_count}
                </div>
                <div
                  className={`${isResponsive ? 'sm:text-lg' : 'text-lg'} font-bold text-gray-500`}
                >
                  {t('followers')}
                </div>
              </div>
              <div>
                <div className={`${isResponsive ? 'text-xl sm:text-2xl' : 'text-2xl'} font-bold`}>
                  # -
                </div>
                <div
                  className={`${isResponsive ? 'sm:text-lg' : 'text-lg'} font-bold text-gray-500`}
                >
                  {t('leaderboard')}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='w-full h-20 xl:h-72 text-xl flex items-center justify-center font-semibold italic'>
          {isConnectedUserCard ? t('connect wallet') : t('profile error')}
        </div>
      )}
    </div>
  )
}
