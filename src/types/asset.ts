import { Cross } from "./cross";

export type AssetSymbol = "ROC" | "USDT" | "PRING" | "ahUSDT";

export interface Asset {
  icon: string; // File name
  id: number;
  name: string;
  symbol: AssetSymbol;
  decimals: number;
  cross: Cross[];
}
