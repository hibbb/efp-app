import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useQuery } from '@tanstack/react-query'
import { DAY, HOUR, MINUTE } from '#/lib/constants'
import { fetchNotifications } from '#/api/profile/fetch-notifications'

// Sorting the notifications via certain time frames, so it will perform logical grouping of events (avoids displaying every notification individually)
const NOTIFICATIONS_TIMESTAMPS = [
  {
    label: 'recent',
    from: new Date(Date.now()).toISOString(),
    to: new Date(Date.now() - 1 * HOUR).toISOString(),
  },
  {
    label: '1h',
    from: new Date(Date.now() - 1 * HOUR).toISOString(),
    to: new Date(Date.now() - 2 * HOUR).toISOString(),
  },
  {
    label: '6h',
    from: new Date(Date.now() - 2 * HOUR).toISOString(),
    to: new Date(Date.now() - 6 * HOUR).toISOString(),
  },
  {
    label: '12h',
    from: new Date(Date.now() - 6 * HOUR).toISOString(),
    to: new Date(Date.now() - 12 * HOUR).toISOString(),
  },
  {
    label: '24h',
    from: new Date(Date.now() - 12 * HOUR).toISOString(),
    to: new Date(Date.now() - 24 * HOUR).toISOString(),
  },
  {
    label: '1d',
    from: new Date(Date.now() - 1 * DAY).toISOString(),
    to: new Date(Date.now() - 2 * DAY).toISOString(),
  },
  {
    label: '2d',
    from: new Date(Date.now() - 2 * DAY).toISOString(),
    to: new Date(Date.now() - 3 * DAY).toISOString(),
  },
  {
    label: '3d',
    from: new Date(Date.now() - 3 * DAY).toISOString(),
    to: new Date(Date.now() - 4 * DAY).toISOString(),
  },
  {
    label: '7d',
    from: new Date(Date.now() - 4 * DAY).toISOString(),
    to: new Date(Date.now() - 7 * DAY).toISOString(),
  },
  {
    label: '1w',
    from: new Date(Date.now() - 7 * DAY).toISOString(),
    to: new Date(Date.now() - 14 * DAY).toISOString(),
  },
  {
    label: '1m',
    from: new Date(Date.now() - 14 * DAY).toISOString(),
    to: new Date(Date.now() - 30 * DAY).toISOString(),
  },
]

export const useNotifications = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { address: userAddress } = useAccount()
  const { data, isLoading } = useQuery({
    queryKey: ['notifications', userAddress],
    queryFn: async () => {
      const notifications = await fetchNotifications(userAddress, 'month')

      const sortedNotifications = NOTIFICATIONS_TIMESTAMPS.map((timestamp) => {
        const filteredNotifications = notifications?.notifications.filter(
          (notification) => notification.updated_at <= timestamp.from && notification.updated_at >= timestamp.to
        )
        return {
          ...timestamp,
          notifications: {
            follow: filteredNotifications?.filter((notification) => notification.action === 'follow'),
            unfollow: filteredNotifications?.filter((notification) => notification.action === 'unfollow'),
            tag: filteredNotifications?.filter(
              (notification) =>
                notification.action === 'tag' && notification.tag !== 'block' && notification.tag !== 'mute'
            ),
            untag: filteredNotifications?.filter(
              (notification) =>
                notification.action === 'untag' && notification.tag !== 'block' && notification.tag !== 'mute'
            ),
            block: filteredNotifications?.filter(
              (notification) => notification.action === 'tag' && notification.tag === 'block'
            ),
            unblock: filteredNotifications?.filter(
              (notification) => notification.action === 'tag' && notification.tag === 'block'
            ),
            mute: filteredNotifications?.filter(
              (notification) => notification.action === 'tag' && notification.tag === 'mute'
            ),
            unmute: filteredNotifications?.filter(
              (notification) => notification.action === 'tag' && notification.tag === 'mute'
            ),
          },
        }
      })

      return {
        notifications: sortedNotifications,
        notificationsCount: notifications?.notifications.length,
      }
    },
    refetchInterval: MINUTE * 5,
  })

  return { notifications: data?.notifications, isLoading, isOpen, setIsOpen }
}
