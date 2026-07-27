export const PRODUCT_ICON_TYPES = ["shield", "signal"] as const;

export type ProductIconType = (typeof PRODUCT_ICON_TYPES)[number];

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly eyebrow: string;
  readonly tagline: string;
  readonly description: string;
  readonly href: string;
  readonly features: readonly string[];
  readonly icon: ProductIcon