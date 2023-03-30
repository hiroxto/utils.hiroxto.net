import { QrCodeErrorCorrectionLevel, QrCodeRenderAsOptionValue, Route, TicketType } from './index';
import { _GettersTree } from 'pinia';

export interface FareTicketRouteStore {
  type: TicketType
  month: string
  day: string
  skipDate: boolean
  routes: Route[],
  routes1: Route[],
  routes2: Route[],
  departure: string
  via: string
  destination: string
}

export type FareTicketRouteStoreGetters = _GettersTree<FareTicketRouteStore>

export interface FareTicketRouteStoreActions {
  setType(type: TicketType): void
  resetType(): void
  setMonth(month: string): void
  setDay(day: string): void
  unUseDate(): void
  useDate(): void
  setDate(addDate: number): void
  setUndefinedDate(): void
  setDeparture(departure: string): void
  setVia(via: string): void
  setDestination(destination: string): void
  resetStations(): void
}

export interface QrCodeGeneratorState {
  value: string;
  size: number;
  level: QrCodeErrorCorrectionLevel;
  renderAs: QrCodeRenderAsOptionValue;
  backGround: string;
  foreGround: string;
}
