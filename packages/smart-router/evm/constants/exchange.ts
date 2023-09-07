import { ChainId, Token } from '@pancakeswap/sdk'

import { ChainMap, ChainTokenList } from '../types'
import {
  bitgertTokens,
  coreTokens,
  dogechainTokens,
  dokenTokens,
  fuseTokens,
  xdcTokens,
  xodexTokens
} from "@pancakeswap/tokens";

export const SWAP_ROUTER_ADDRESSES = {
  // [ChainId.ETHEREUM]: '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4',
  // [ChainId.GOERLI]: '0x9a489505a00cE272eAa5e07Dba6491314CaE3796',
  // [ChainId.BSC]: '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4',
  // [ChainId.BSC_TESTNET]: '0x9a489505a00cE272eAa5e07Dba6491314CaE3796',
  [ChainId.CORE]: '0x1EF84E4709dB3F364FBB40c86360F51e64361e64',
} as const satisfies Record<ChainId, string>

/*
export const ROUTER_ADDRESS: ChainMap<string> = {
  // [ChainId.ETHEREUM]: '0x3BC722f252C7bAE2f55647e49aDcB9d33Ff6eBcC',
  // [ChainId.GOERLI]: '0x3BC722f252C7bAE2f55647e49aDcB9d33Ff6eBcC',
  [ChainId.BSC]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  // [ChainId.BSC_TESTNET]: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
}
*/

export const STABLE_SWAP_INFO_ADDRESS: ChainMap<string> = {}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: Partial<ChainTokenList> = {
  [ChainId.BITGERT]: [bitgertTokens.wbrise, bitgertTokens.ice, bitgertTokens.usdci, bitgertTokens.usdti],
  [ChainId.DOGE]: [dogechainTokens.wdoge, dogechainTokens.ice],
  [ChainId.DOKEN]: [dokenTokens.wdkn, dokenTokens.ice, dokenTokens.usdt],
  [ChainId.FUSE]: [fuseTokens.wfuse, fuseTokens.ice],
  [ChainId.XDC]: [xdcTokens.wxdc, xdcTokens.ice, xdcTokens.usdt],
  [ChainId.CORE]: [coreTokens.wcore, coreTokens.score, coreTokens.ice, coreTokens.usdt],
  [ChainId.XODEX]: [xodexTokens.wxodex, xodexTokens.ice, xodexTokens.usdt],
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {
  [ChainId.BSC]: {
    // [bscTokens.axlusdc.address]: [bscTokens.usdt],
  },
}

// used for display in the default list when adding liquidity
/*
export const SUGGESTED_BASES: ChainTokenList = {
  // [ChainId.ETHEREUM]: [USDC[ChainId.ETHEREUM], WBNB[ChainId.ETHEREUM], BUSD[ChainId.ETHEREUM], USDT[ChainId.ETHEREUM]],
  // [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  [ChainId.BSC]: [bscTokens.busd, bscTokens.cake, bscTokens.btcb],
  // [ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd],
}
*/

// used to construct the list of all pairs we consider by default in the frontend
/*
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  // [ChainId.ETHEREUM]: [
  //   USDC[ChainId.ETHEREUM],
  //   WNATIVE[ChainId.ETHEREUM],
  //   BUSD[ChainId.ETHEREUM],
  //   USDT[ChainId.ETHEREUM],
  //   WBNB[ChainId.ETHEREUM],
  // ],
  // [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  // [ChainId.BSC]: [bscTokens.wbnb, bscTokens.dai, bscTokens.busd, bscTokens.usdt, bscTokens.cake],
  // [ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd],
}
*/

/*
export const PINNED_PAIRS: {
  readonly [chainId in ChainId]?: [Token, Token][]
} = {
  // [ChainId.ETHEREUM]: [
  //   [WNATIVE[ChainId.ETHEREUM], USDC[ChainId.ETHEREUM]],
  //   [WBNB[ChainId.ETHEREUM], USDC[ChainId.ETHEREUM]],
  //   [WBNB[ChainId.ETHEREUM], BUSD[ChainId.ETHEREUM]],
  //   [WBNB[ChainId.ETHEREUM], USDT[ChainId.ETHEREUM]],
  //   [WBNB[ChainId.ETHEREUM], WNATIVE[ChainId.ETHEREUM]],
  // ],
  // [ChainId.BSC]: [
  //   [bscTokens.cake, bscTokens.wbnb],
  //   [bscTokens.busd, bscTokens.usdt],
  //   [bscTokens.dai, bscTokens.usdt],
  // ],
}
*/