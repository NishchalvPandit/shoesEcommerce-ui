/**
 * Maps shop hash routes to scroll targets and optional category filters.
 * Used by the navbar, bento categories, and curated collection cards.
 */
export const SHOP_COLLECTION_MAP = {
  performance: {
    hash: 'performance',
    scrollTarget: 'performance',
    categories: ['Performance'],
    title: 'Elite Performance',
  },
  lifestyle: {
    hash: 'lifestyle',
    scrollTarget: 'lifestyle',
    categories: [],
    title: 'Lifestyle Collections',
  },
  collections: {
    hash: 'collections',
    scrollTarget: 'collections',
    categories: [],
    title: 'Curated Collections',
  },
  basketball: {
    hash: 'basketball',
    scrollTarget: 'performance',
    categories: ['Basketball'],
    title: 'Basketball',
  },
  running: {
    hash: 'running',
    scrollTarget: 'performance',
    categories: ['Running'],
    title: 'Running',
  },
  casual: {
    hash: 'casual',
    scrollTarget: 'performance',
    categories: ['Lifestyle'],
    title: 'Casual',
  },
  training: {
    hash: 'training',
    scrollTarget: 'performance',
    categories: ['Training'],
    title: 'Training',
  },
}

/** Curated showcase cards → shop collection route keys */
export const CURATED_COLLECTION_ROUTES = {
  moto: 'performance',
  archive: 'lifestyle',
  seasonal: 'collections',
}

/**
 * Builds a shop URL for a collection route key.
 */
export function getShopCollectionUrl(routeKey) {
  const config = SHOP_COLLECTION_MAP[routeKey]
  return config ? `/shop#${config.hash}` : '/shop'
}

/**
 * Resolves a URL hash to collection config, if defined.
 */
export function getCollectionFromHash(hash) {
  const key = hash.replace(/^#/, '')
  return SHOP_COLLECTION_MAP[key] ?? null
}
