import { TradeType } from '@pancakeswap/sdk'
import { SmartRouter, SmartRouterTrade } from '@pancakeswap/smart-router/evm'
import { AutoColumn } from '@pancakeswap/uikit'
import useLastTruthy from 'hooks/useLast'
import { useMemo, memo } from 'react'

import { AdvancedSwapDetails, TradeSummary } from 'views/Swap/components/AdvancedSwapDetails'
import { AdvancedDetailsFooter } from 'views/Swap/components/AdvancedSwapDetailsDropdown'

import { MMTradeInfo } from 'views/Swap/MMLinkPools/hooks'
import { RoutesBreakdown } from '../components'
import { useSlippageAdjustedAmounts, useIsWrapping } from '../hooks'
import { useTradePriceBreakdown } from 'hooks/useTradePriceBreakdown'

interface Props {
  loaded: boolean
  trade?: SmartRouterTrade<TradeType> | null
  routeProvider?: string
}

export function MMTradeDetail({ loaded, mmTrade }: { loaded: boolean; mmTrade?: MMTradeInfo }) {
  const lastTrade = useLastTruthy(mmTrade?.trade)

  return (
    <AdvancedDetailsFooter show={loaded}>
      <AutoColumn gap="0px">
        {lastTrade && (
          <AdvancedSwapDetails
            pairs={[]}
            path={lastTrade?.routes[0].path}
            slippageAdjustedAmounts={mmTrade?.slippageAdjustedAmounts}
            realizedLPFee={mmTrade?.realizedLPFee}
            inputAmount={mmTrade?.inputAmount}
            outputAmount={mmTrade?.outputAmount}
            tradeType={mmTrade?.tradeType}
            priceImpactWithoutFee={mmTrade?.priceImpactWithoutFee}
            isMM
          />
        )}
      </AutoColumn>
    </AdvancedDetailsFooter>
  )
}

export const TradeDetails = memo(function TradeDetails({ loaded, trade, routeProvider }: Props) {
  const slippageAdjustedAmounts = useSlippageAdjustedAmounts(trade)
  const isWrapping = useIsWrapping()
  const { priceImpactWithoutFee, lpFeeAmount } = useTradePriceBreakdown(trade)
  const hasStablePool = useMemo(
    () => trade?.routes.some((route) => route.pools.some(SmartRouter.isStablePool)),
    [trade],
  )

  if (isWrapping || !loaded || !trade) {
    return null
  }

  const { inputAmount, outputAmount, tradeType, routes } = trade

  return (
    <AdvancedDetailsFooter show={loaded}>
      <AutoColumn gap="0px">
        <TradeSummary
          slippageAdjustedAmounts={slippageAdjustedAmounts}
          inputAmount={inputAmount}
          outputAmount={outputAmount}
          tradeType={tradeType}
          priceImpactWithoutFee={priceImpactWithoutFee}
          realizedLPFee={lpFeeAmount}
          hasStablePair={hasStablePool}
        />
        <RoutesBreakdown routes={routes} routeProvider={routeProvider} />
      </AutoColumn>
    </AdvancedDetailsFooter>
  )
})
