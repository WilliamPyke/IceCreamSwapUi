import { ChainId } from '@pancakeswap/sdk'

const chainName: Record<ChainId, string> = {
  [ChainId.BITGERT]: 'Bitgert',
  [ChainId.SHIMMER]: 'Shimmer EVM',
  [ChainId.DOGE]: 'Doge',
  [ChainId.DOKEN]: 'Doken',
  [ChainId.FUSE]: 'Fuse',
  [ChainId.XDC]: 'XDC',
  [ChainId.BSC]: 'Binance',
  [ChainId.CORE]: 'CORE',
  [ChainId.XODEX]: 'XODEX',
  [ChainId.SHARDEUM_TEST]: 'Shardeum (Testnet)',
  [ChainId.TELOS]: 'Telos',
  [ChainId.BASE]: 'Base',
}

export default chainName
