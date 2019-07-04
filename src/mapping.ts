import {
  MarketCreated as MarketCreatedEvent,
  InitialReportSubmitted as InitialReportSubmittedEvent,
  DisputeCrowdsourcerCreated as DisputeCrowdsourcerCreatedEvent,
  DisputeCrowdsourcerContribution as DisputeCrowdsourcerContributionEvent,
  DisputeCrowdsourcerCompleted as DisputeCrowdsourcerCompletedEvent,
  InitialReporterRedeemed as InitialReporterRedeemedEvent,
  DisputeCrowdsourcerRedeemed as DisputeCrowdsourcerRedeemedEvent,
  ReportingParticipantDisavowed as ReportingParticipantDisavowedEvent,
  MarketParticipantsDisavowed as MarketParticipantsDisavowedEvent,
  FeeWindowRedeemed as FeeWindowRedeemedEvent,
  MarketFinalized as MarketFinalizedEvent,
  MarketMigrated as MarketMigratedEvent,
  UniverseForked as UniverseForkedEvent,
  UniverseCreated as UniverseCreatedEvent,
  OrderCanceled as OrderCanceledEvent,
  OrderCreated as OrderCreatedEvent,
  OrderFilled as OrderFilledEvent,
  CompleteSetsPurchased as CompleteSetsPurchasedEvent,
  CompleteSetsSold as CompleteSetsSoldEvent,
  TradingProceedsClaimed as TradingProceedsClaimedEvent,
  TokensTransferred as TokensTransferredEvent,
  TokensMinted as TokensMintedEvent,
  TokensBurned as TokensBurnedEvent,
  FeeWindowCreated as FeeWindowCreatedEvent,
  InitialReporterTransferred as InitialReporterTransferredEvent,
  MarketTransferred as MarketTransferredEvent,
  MarketMailboxTransferred as MarketMailboxTransferredEvent,
  EscapeHatchChanged as EscapeHatchChangedEvent,
  TimestampSet as TimestampSetEvent
} from "../generated/Contract/Contract"
import {
  MarketCreated,
  InitialReportSubmitted,
  DisputeCrowdsourcerCreated,
  DisputeCrowdsourcerContribution,
  DisputeCrowdsourcerCompleted,
  InitialReporterRedeemed,
  DisputeCrowdsourcerRedeemed,
  ReportingParticipantDisavowed,
  MarketParticipantsDisavowed,
  FeeWindowRedeemed,
  MarketFinalized,
  MarketMigrated,
  UniverseForked,
  UniverseCreated,
  OrderCanceled,
  OrderCreated,
  OrderFilled,
  CompleteSetsPurchased,
  CompleteSetsSold,
  TradingProceedsClaimed,
  TokensTransferred,
  TokensMinted,
  TokensBurned,
  FeeWindowCreated,
  InitialReporterTransferred,
  MarketTransferred,
  MarketMailboxTransferred,
  EscapeHatchChanged,
  TimestampSet
} from "../generated/schema"

export function handleMarketCreated(event: MarketCreatedEvent): void {
  let entity = new MarketCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.topic = event.params.topic
  entity.description = event.params.description
  entity.extraInfo = event.params.extraInfo
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.marketCreator = event.params.marketCreator
  entity.outcomes = event.params.outcomes
  entity.marketCreationFee = event.params.marketCreationFee
  entity.minPrice = event.params.minPrice
  entity.maxPrice = event.params.maxPrice
  entity.marketType = event.params.marketType
  entity.save()
}

export function handleInitialReportSubmitted(
  event: InitialReportSubmittedEvent
): void {
  let entity = new InitialReportSubmitted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.reporter = event.params.reporter
  entity.market = event.params.market
  entity.amountStaked = event.params.amountStaked
  entity.isDesignatedReporter = event.params.isDesignatedReporter
  entity.payoutNumerators = event.params.payoutNumerators
  entity.invalid = event.params.invalid
  entity.save()
}

export function handleDisputeCrowdsourcerCreated(
  event: DisputeCrowdsourcerCreatedEvent
): void {
  let entity = new DisputeCrowdsourcerCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.disputeCrowdsourcer = event.params.disputeCrowdsourcer
  entity.payoutNumerators = event.params.payoutNumerators
  entity.size = event.params.size
  entity.invalid = event.params.invalid
  entity.save()
}

export function handleDisputeCrowdsourcerContribution(
  event: DisputeCrowdsourcerContributionEvent
): void {
  let entity = new DisputeCrowdsourcerContribution(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.reporter = event.params.reporter
  entity.market = event.params.market
  entity.disputeCrowdsourcer = event.params.disputeCrowdsourcer
  entity.amountStaked = event.params.amountStaked
  entity.save()
}

export function handleDisputeCrowdsourcerCompleted(
  event: DisputeCrowdsourcerCompletedEvent
): void {
  let entity = new DisputeCrowdsourcerCompleted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.disputeCrowdsourcer = event.params.disputeCrowdsourcer
  entity.save()
}

export function handleInitialReporterRedeemed(
  event: InitialReporterRedeemedEvent
): void {
  let entity = new InitialReporterRedeemed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.reporter = event.params.reporter
  entity.market = event.params.market
  entity.amountRedeemed = event.params.amountRedeemed
  entity.repReceived = event.params.repReceived
  entity.reportingFeesReceived = event.params.reportingFeesReceived
  entity.payoutNumerators = event.params.payoutNumerators
  entity.save()
}

export function handleDisputeCrowdsourcerRedeemed(
  event: DisputeCrowdsourcerRedeemedEvent
): void {
  let entity = new DisputeCrowdsourcerRedeemed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.reporter = event.params.reporter
  entity.market = event.params.market
  entity.disputeCrowdsourcer = event.params.disputeCrowdsourcer
  entity.amountRedeemed = event.params.amountRedeemed
  entity.repReceived = event.params.repReceived
  entity.reportingFeesReceived = event.params.reportingFeesReceived
  entity.payoutNumerators = event.params.payoutNumerators
  entity.save()
}

export function handleReportingParticipantDisavowed(
  event: ReportingParticipantDisavowedEvent
): void {
  let entity = new ReportingParticipantDisavowed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.reportingParticipant = event.params.reportingParticipant
  entity.save()
}

export function handleMarketParticipantsDisavowed(
  event: MarketParticipantsDisavowedEvent
): void {
  let entity = new MarketParticipantsDisavowed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.save()
}

export function handleFeeWindowRedeemed(event: FeeWindowRedeemedEvent): void {
  let entity = new FeeWindowRedeemed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.reporter = event.params.reporter
  entity.feeWindow = event.params.feeWindow
  entity.amountRedeemed = event.params.amountRedeemed
  entity.reportingFeesReceived = event.params.reportingFeesReceived
  entity.save()
}

export function handleMarketFinalized(event: MarketFinalizedEvent): void {
  let entity = new MarketFinalized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.save()
}

export function handleMarketMigrated(event: MarketMigratedEvent): void {
  let entity = new MarketMigrated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.market = event.params.market
  entity.originalUniverse = event.params.originalUniverse
  entity.newUniverse = event.params.newUniverse
  entity.save()
}

export function handleUniverseForked(event: UniverseForkedEvent): void {
  let entity = new UniverseForked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.save()
}

export function handleUniverseCreated(event: UniverseCreatedEvent): void {
  let entity = new UniverseCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.parentUniverse = event.params.parentUniverse
  entity.childUniverse = event.params.childUniverse
  entity.payoutNumerators = event.params.payoutNumerators
  entity.invalid = event.params.invalid
  entity.save()
}

export function handleOrderCanceled(event: OrderCanceledEvent): void {
  let entity = new OrderCanceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.shareToken = event.params.shareToken
  entity.sender = event.params.sender
  entity.orderId = event.params.orderId
  entity.orderType = event.params.orderType
  entity.tokenRefund = event.params.tokenRefund
  entity.sharesRefund = event.params.sharesRefund
  entity.save()
}

// Update a given market object with new order
export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity = new OrderCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderType = event.params.orderType
  entity.amount = event.params.amount
  entity.price = event.params.price
  entity.creator = event.params.creator
  entity.moneyEscrowed = event.params.moneyEscrowed
  entity.sharesEscrowed = event.params.sharesEscrowed
  entity.tradeGroupId = event.params.tradeGroupId
  entity.orderId = event.params.orderId
  entity.universe = event.params.universe
  entity.shareToken = event.params.shareToken
  entity.save()
}

export function handleOrderFilled(event: OrderFilledEvent): void {
  let entity = new OrderFilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.shareToken = event.params.shareToken
  entity.filler = event.params.filler
  entity.orderId = event.params.orderId
  entity.numCreatorShares = event.params.numCreatorShares
  entity.numCreatorTokens = event.params.numCreatorTokens
  entity.numFillerShares = event.params.numFillerShares
  entity.numFillerTokens = event.params.numFillerTokens
  entity.marketCreatorFees = event.params.marketCreatorFees
  entity.reporterFees = event.params.reporterFees
  entity.amountFilled = event.params.amountFilled
  entity.tradeGroupId = event.params.tradeGroupId
  entity.save()
}

export function handleCompleteSetsPurchased(
  event: CompleteSetsPurchasedEvent
): void {
  let entity = new CompleteSetsPurchased(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.account = event.params.account
  entity.numCompleteSets = event.params.numCompleteSets
  entity.save()
}

export function handleCompleteSetsSold(event: CompleteSetsSoldEvent): void {
  let entity = new CompleteSetsSold(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.account = event.params.account
  entity.numCompleteSets = event.params.numCompleteSets
  entity.save()
}

export function handleTradingProceedsClaimed(
  event: TradingProceedsClaimedEvent
): void {
  let entity = new TradingProceedsClaimed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.shareToken = event.params.shareToken
  entity.sender = event.params.sender
  entity.market = event.params.market
  entity.numShares = event.params.numShares
  entity.numPayoutTokens = event.params.numPayoutTokens
  entity.finalTokenBalance = event.params.finalTokenBalance
  entity.save()
}

export function handleTokensTransferred(event: TokensTransferredEvent): void {
  let entity = new TokensTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.token = event.params.token
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.tokenType = event.params.tokenType
  entity.market = event.params.market
  entity.save()
}

export function handleTokensMinted(event: TokensMintedEvent): void {
  let entity = new TokensMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.token = event.params.token
  entity.target = event.params.target
  entity.amount = event.params.amount
  entity.tokenType = event.params.tokenType
  entity.market = event.params.market
  entity.save()
}

export function handleTokensBurned(event: TokensBurnedEvent): void {
  let entity = new TokensBurned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.token = event.params.token
  entity.target = event.params.target
  entity.amount = event.params.amount
  entity.tokenType = event.params.tokenType
  entity.market = event.params.market
  entity.save()
}

export function handleFeeWindowCreated(event: FeeWindowCreatedEvent): void {
  let entity = new FeeWindowCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.feeWindow = event.params.feeWindow
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.id = event.params.id
  entity.save()
}

export function handleInitialReporterTransferred(
  event: InitialReporterTransferredEvent
): void {
  let entity = new InitialReporterTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleMarketTransferred(event: MarketTransferredEvent): void {
  let entity = new MarketTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleMarketMailboxTransferred(
  event: MarketMailboxTransferredEvent
): void {
  let entity = new MarketMailboxTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.universe = event.params.universe
  entity.market = event.params.market
  entity.mailbox = event.params.mailbox
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleEscapeHatchChanged(event: EscapeHatchChangedEvent): void {
  let entity = new EscapeHatchChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.isOn = event.params.isOn
  entity.save()
}

export function handleTimestampSet(event: TimestampSetEvent): void {
  let entity = new TimestampSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newTimestamp = event.params.newTimestamp
  entity.save()
}
