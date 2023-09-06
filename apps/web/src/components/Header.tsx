'use client'

import clsx from 'clsx'
import { ConnectKitButton } from 'connectkit'
import { usePathname } from 'next/navigation'
import { pageRoutes } from '#/lib/constants.ts'
import { Menu } from './Menu.tsx'
import { Search } from './Search.tsx'
import { Text } from '@radix-ui/themes'

export function Header() {
  const pathname = usePathname()

  return (
    <header className={clsx(['w-full px-2.5 font-sans sm:px-3 md:px-4 lg:px-5 xl:px-6'])}>
      <nav className='w-full flex flex-row justify-between my-auto'>
        <div className={clsx(['flex space-x-3 pr-3 my-auto w-full items-center'])}>
          <a
            href='/'
            className='w-15 h-15'
          >
            <img
              alt='EFP Logo'
              src='/assets/logo.png'
              className='w-12'
            />
          </a>
          <Text
            className={clsx(['w-24 h-20 text-pink-400 text-lg font-bold !leading-4 pt-4'])}
            trim={'both'}
            weight={'bold'}
            size={{
              initial: '1',
              sm: '2',
              md: '3',
            }}
          >
            Ethereum <br />
            Follow <br />
            Protocol
          </Text>
          <Search />
        </div>

        <ul
          className={clsx([
            'my-auto flex space-x-0 text-lg font-semibold px-2.25 py-0.15',
            'sm:space-x-3 sm:p-0 sm:bg-transparent sm:pr-3',
            'hidden md:flex',
          ])}
        >
          {pageRoutes.map((route, index) => (
            <li
              className='inline'
              key={`route-${index}`}
            >
              <a
                href={route.href}
                className={clsx([
                  'capitalize',
                  pathname === route.href ? 'text-black' : 'text-pink-400',
                ])}
              >
                <span className={clsx(['hidden', 'md:block'])}>{route.text}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={clsx(['my-auto flex items-center pb-1'])}>
          <ConnectKitButton />
        </div>
        <div className='my-auto pl-2.5 pb-0.5'>
          <Menu />
        </div>
      </nav>
    </header>
  )
}