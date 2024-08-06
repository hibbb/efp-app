'use client'

import { Suspense } from 'react'
import { useRouter } from 'next/navigation'

import TableRow from './row.tsx'
import LoadingRow from './loading-row.tsx'
import PageSelector from './page-selector.tsx'
import { Searchbar } from '#/components/searchbar.tsx'
import useLeaderboard from '../hooks/useLeaderboard.ts'
import type { LeaderboardResponse } from '#/types/requests.ts'
import { leaderboardFilters, leaderboardFiltersEmojies } from '#/lib/constants/index.ts'
import type { LeaderboardFilter } from '#/types/common.ts'

const LeaderboardTable = () => {
  const router = useRouter()
  const {
    page,
    filter,
    search,
    setPage,
    setFilter,
    leaderboard,
    isLeaderboardLoading,
    fetchNextLeaderboard,
    fetchPreviousLeaderboard,
    isFetchingNextLeaderboard,
    isFetchingPreviousLeaderboard
  } = useLeaderboard()

  const onSelectFilter = (newFilter: LeaderboardFilter) => {
    setFilter(newFilter)
    setPage(1)

    const params = new URLSearchParams()
    params.set('filter', newFilter)
    if (search) params.set('search', search)
    router.push(`/leaderboard?${params.toString()}`)
  }

  const selectedRank = {
    followers: (entry: LeaderboardResponse) => entry.followers_rank,
    following: (entry: LeaderboardResponse) => entry.following_rank,
    mutuals: (entry: LeaderboardResponse) => entry.mutuals_rank,
    blocked: (entry: LeaderboardResponse) => entry.blocks_rank
  }[filter]

  return (
    <div className='flex flex-col mt-6 gap-6 w-full max-w-[1200px]'>
      <div className='flex w-full flex-wrap justify-center lg:hidden items-center gap-4'>
        {leaderboardFilters.map((item, i) => (
          <div
            key={item}
            className={`p-2 font-semibold w-[132px] px-4 capitalize cursor-pointer rounded-full ${
              filter === item ? 'bg-gray-100 shadow-inner' : 'bg-gray-300'
            }`}
            onClick={() => onSelectFilter(item)}
          >
            {`${item} ${leaderboardFiltersEmojies[i]}`}
          </div>
        ))}
      </div>
      <div className='flex justify-between'>
        <div className='w-full sm:max-w-sm sm:w-52'>
          <Suspense>
            <Searchbar queryKey='query' placeholder='Search...' />
          </Suspense>
        </div>
        <div className='hidden lg:flex items-center gap-4'>
          {leaderboardFilters.map((item, i) => (
            <div
              key={item}
              className={`p-2 font-semibold px-4 capitalize cursor-pointer rounded-full ${
                filter === item ? 'bg-gray-100 shadow-inner' : 'bg-gray-300'
              }`}
              onClick={() => onSelectFilter(item)}
            >
              {`${item} ${leaderboardFiltersEmojies[i]}`}
            </div>
          ))}
        </div>
        <div className='hidden sm:block'>
          <p className='h-2 font-semibold text-sm sm:text-lg'>
            {`${leaderboard?.length} account${leaderboard?.length === 1 ? '' : 's'}`}
          </p>
        </div>
      </div>
      <div className='glass-card border-gray-200 border-2 rounded-xl flex flex-col gap-8 p-3 sm:px-8 sm:py-6 lg:px-12 lg:py-10 relative'>
        <PageSelector
          page={page}
          setPage={setPage}
          hasNextPage={leaderboard?.length === 100}
          fetchNext={() => fetchNextLeaderboard()}
          fetchPrevious={() => fetchPreviousLeaderboard()}
        />
        <div className='w-full flex flex-col gap-4'>
          {leaderboard?.map((entry: LeaderboardResponse, index) => (
            <TableRow
              key={entry.address}
              address={entry.address}
              name={entry.name}
              avatar={entry.avatar}
              rank={Number(selectedRank(entry))}
              followers={Number(entry.followers) || 0}
              following={Number(entry.following) || 0}
              mutuals={Number(entry.mutuals) || 0}
              blockedMuted={Number(entry.blocks) || 0}
            />
          ))}
          {new Array(
            isLeaderboardLoading || isFetchingNextLeaderboard || isFetchingPreviousLeaderboard
              ? 100
              : 0
          )
            .fill(1)
            .map((_, i) => (
              <LoadingRow key={i} />
            ))}
        </div>
        <PageSelector
          page={page}
          setPage={setPage}
          hasNextPage={leaderboard?.length === 100}
          fetchNext={() => fetchNextLeaderboard()}
          fetchPrevious={() => fetchPreviousLeaderboard()}
        />
      </div>
    </div>
  )
}

export default LeaderboardTable