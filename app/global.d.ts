// global.d.ts
export { };

declare module "*.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}