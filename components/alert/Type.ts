export type Types = "info" | "positive" | "negative" | "warning";
export type TypesMap = Record<Types, string>;
export interface AlertProps {
  /**
   * Set this to change alert type
   * @default info
   */
  type?: "info" | "positive" | "negative" | "warning";
}
