import type { StaticImageData } from 'next/image'

import PWN from 'public/assets/partners/pwn.png'
import POAP from 'public/assets/partners/poap.png'
import Namefi from 'public/assets/partners/namefi.png'
import EFPBot from 'public/assets/partners/efpbot.png'
import Rocbox from 'public/assets/partners/rocbox.png'
import Payflow from 'public/assets/partners/payflow.png'
import WebHash from 'public/assets/partners/webhash.png'
import ENSBook from 'public/assets/partners/ensbook.png'
import EthDotCd from 'public/assets/partners/ethdotcd.png'
import Interface from 'public/assets/partners/interface.png'
import EnsVision from 'public/assets/partners/ensvision.png'
import WebThreeBio from 'public/assets/partners/web3bio.png'
import JustaName from 'public/assets/partners/justaname.png'
import EFPUpdates from 'public/assets/partners/efpupdates.png'
import Blockscout from 'public/assets/partners/blockscout.png'
import LikeButton from 'public/assets/partners/likebutton.png'
import HarvestArt from 'public/assets/partners/harvestart.png'
import VibesScapes from 'public/assets/partners/vibesscapes.png'
import EngagementVision from 'public/assets/partners/engagementvision.png'
import DevconCollabPortal from 'public/assets/partners/devconcollabportal.png'
import DevconPassport from 'public/assets/partners/devconpassport.png'
import ETHTools from 'public/assets/partners/ethtools.png'
import Yodl from 'public/assets/partners/yodl.png'
import Snapshot from 'public/assets/partners/snapshot.png'
import BanklessAcademy from 'public/assets/partners/banklessacademy.png'
import ENSResolver from 'public/assets/partners/ensresolver.png'
import Rotki from 'public/assets/partners/rotki.png'
import Zapper from 'public/assets/partners/zapper.png'
import Recordsxyz from 'public/assets/partners/recordsxyz.png'
import Agora from 'public/assets/partners/agora.png'

export const INTEGRATIONS = [
  {
    name: 'Interface',
    url: 'https://interface.social',
    logo: Interface,
  },
  {
    name: 'Snapshot',
    url: 'https://snapshot.box/',
    logo: Snapshot,
  },
  {
    name: 'POAP',
    url: 'https://poap.xyz',
    logo: POAP,
  },
  {
    name: 'Vision',
    url: 'https://vision.io/',
    logo: EnsVision,
  },
  {
    name: 'Yodl',
    url: 'https://yodl.me/',
    logo: Yodl,
  },
  {
    name: 'Zapper',
    url: 'https://zapper.xyz/',
    logo: Zapper,
  },
  {
    name: 'Rotki',
    url: 'https://rotki.com/',
    logo: Rotki,
  },
  {
    name: 'Agora',
    url: 'https://www.agora.xyz/',
    logo: Agora,
  },
  {
    name: 'Blockscout',
    url: 'https://www.blockscout.com/',
    logo: Blockscout,
  },
  {
    name: 'Vibes',
    url: 'https://vibes.scapes.xyz/',
    logo: VibesScapes,
  },
  {
    name: 'LikeButton.eth',
    url: 'https://likebutton.eth.limo/',
    logo: LikeButton,
  },
  {
    name: 'Records.xyz',
    url: 'https://records.xyz',
    logo: Recordsxyz,
  },
  {
    name: 'Webhash',
    url: 'https://webhash.com',
    logo: WebHash,
  },
  {
    name: 'Bankless Academy',
    url: 'https://app.banklessacademy.com/',
    logo: BanklessAcademy,
  },
  {
    name: 'Payflow',
    url: 'https://payflow.me',
    logo: Payflow,
  },
  {
    name: 'eth.cd',
    url: 'https://eth.cd',
    logo: EthDotCd,
  },
  {
    name: 'EFP Bot',
    url: 'https://x.com/efpbots',
    logo: EFPBot,
  },
  {
    name: 'EFP Updates',
    url: 'https://x.com/efp_updates',
    logo: EFPUpdates,
  },
  {
    name: 'PWN',
    url: 'https://pwn.xyz/',
    logo: PWN,
  },
  {
    name: 'Namefi',
    url: 'https://www.namefi.io/',
    logo: Namefi,
  },
  {
    name: 'ENSBook',
    url: 'https://ensbook.xyz/',
    logo: ENSBook,
  },
  {
    name: 'Web3 Bio',
    url: 'https://web3.bio/',
    logo: WebThreeBio,
  },
  {
    name: 'Roc Box',
    url: 'https://roc.box/',
    logo: Rocbox,
  },
  {
    name: 'Harvest.art',
    url: 'https://harvest.art/',
    logo: HarvestArt,
  },
  {
    name: 'Engagement Vision',
    url: 'https://engagement.vision/',
    logo: EngagementVision,
  },
  {
    name: 'JustaName',
    url: 'https://www.justaname.id/',
    logo: JustaName,
  },
  {
    name: 'Devcon VI Collab Portal',
    url: 'https://devcon.fileverse.io/devcon7/portal',
    logo: DevconCollabPortal,
  },
  {
    name: 'Devcon VI Passport',
    url: 'https://app.devcon.org/',
    logo: DevconPassport,
  },
  {
    name: 'ETH Tools',
    url: 'https://ethtools.com/',
    logo: ETHTools,
  },
  {
    name: 'ENS Resolver',
    url: 'https://adraffy.github.io/ens-normalize.js/test/resolver.html',
    logo: ENSResolver,
  },
] as {
  name: string
  url: string
  logo: string | StaticImageData
}[]
