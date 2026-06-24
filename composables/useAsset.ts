// Resolves a public/ asset path against the app baseURL so it works both
// locally (baseURL "/") and on GitHub Pages (baseURL "/elevation-marketing/").
//
// Static `src`/`srcset` attributes get this prefix applied automatically at
// build time, but dynamic `:src` bindings (e.g. image paths coming from
// useSiteData) do not — so resolve those through this helper.
export function useAsset() {
  const base = useRuntimeConfig().app.baseURL.replace(/\/$/, "");
  return (path: string) => `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
