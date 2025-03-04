'use client'

import type { Address } from 'viem'
import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { FollowButton as IdentityFollowButton, useTransactions } from '@encrypteddegen/identity-kit'

import { useSounds } from '#/contexts/sounds-context'
import { FOLLOW_BUTTON_SOUND } from '#/lib/constants/follow-button'

interface FollowButtonProps {
  address: Address
  className?: string
  isBlockedBy?: boolean
  disabled?: boolean
}

const FollowButton: React.FC<FollowButtonProps> = ({ address, className = '', isBlockedBy, ...props }) => {
  const { openConnectModal } = useConnectModal()
  const { address: connectedAddress } = useAccount()
  const { selectedVolume } = useSounds()
  const { selectedList } = useTransactions()

  if (address.toLowerCase() === connectedAddress?.toLowerCase()) return <div className='h-[39px] w-[110px]' />

  return (
    <IdentityFollowButton
      lookupAddress={address}
      connectedAddress={connectedAddress}
      onDisconnectedClick={openConnectModal}
      className={className}
      selectedList={selectedList}
      sounds={selectedVolume === 'no sounds' ? undefined : FOLLOW_BUTTON_SOUND}
      {...props}
    />
  )
}

export default FollowButton
