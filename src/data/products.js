/* eslint-disable max-lines */

/**
 * Centralized product catalog.
 * Each entry powers a unique /product/:slug detail page.
 *
 * Shape:
 *   slug, name, tagline, category, useCase, sku, badge, badgeTone,
 *   price (number), description, heroImage, gallery[],
 *   colors[{name, hex, ringClass}], sizes[], soldOutSizes[],
 *   specs[{icon, title, desc, wide?}], features[], stockStatus
 */

const IMG = {
  vortex:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPSFMyBBKHVS6iHh710L7AvjSQC9AUJEAX4QTNB-dPSZSm_wWdzCg8Xf6NZl7WJn-Vf770aeJ5Tut2XxApxlU-v7IZ_G398nff3Y9KuYeQywaQcafBrleyT-46J3nAeH-i-0dv0HP9txBmuQWimkr74NQ0SsWoTD9dYtAWmmkrmApIjxP-8hlXk9rEnkpsZBfNOWnaqSRrWAOVMhyyqjPjpD_KnZgyU2WDynXqN9at_OrlWEHwvTXkSF1hoGhZWFT1-Z2yeuZqjWA',
  aeroPrism:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAlLgdG24JxRY2Kcd6uP-B7LjGy7YrwQEllUlp6iyfZfzyDBqAytI1wPkA7xXDPsh0GKb-weHQuiPxltmk9P8zgpr2t7m2PupOnjRGszl9dkurbZ9ZbmT89Cs9bfXRrvNe8mhoT1pNPWtZiJtud090GJ-mepo0ll0lEXtWDbczJCU6coUCquDEowS233Eg2GpepJwk8Zxdp8_Wpv6fmul8Zej0y21zBnXA3fa3wzXYZ8hrSWEQFh-wvwHX6lRo2rT9DU3MXOGDAyHs',
  cinetiq:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SHZNXeFronplfhsEgKUi7OnSHXKAaBmCD-jrwuDHADqIpUbf2dw_rCCkCTzQQIHltRpt1pP9Lk_DUlmEviSdltlAIzVDxOmA8nYNTS8UHh9qIkKh7IOhTGueFV3g_VLPrKCbxmjOGEj3WQsLe_dybKecE9FkKUSPZxu2tGpg_mwbgAXfYyQzqIYaS5KXMWCWtPNwOxAgBhL44WXm1uOPzeW4V2O7VMd3da8VqPwmUDtd3ITv7hc79HkoUp44_uf1PTKC9T3ve0g',
  titan:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJHr9lNR3eiSClxiSbz23Qr0vYZguTOX6yTH5BY01FomIqSW4yUasA4VhltyZw4XYmYzZzapPq1EqWudVCK5NF7vTfeEDNCcLAvFUBP4ftNUSMYaHnyvfrOdNQ5UMRatfB5PVBveT_KYsCIgEOfVLox_6HIr0yZy_PDZ0KgH2vHhtKV-OS_60fTw80C1-y11DMicYNMZ_bBGYk71RZfzYJGu8aNrTN8HCABqcTqoR5pZtVEDr9vWwyPzZBCWx8ojLBmyi3pCtOR4',
  ghost:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBnqgEQGBuwRjXOL0dBKR57V4hrRRX629Tij8hHRMYE01QNfT_53gsy7Bf9t0YopP2UF6eIbjKDMuMN7bV4U6EpMuzhvwZGnwV2_F-cOx6FEoLoybO6Ph1z6LjWSD2gsXK9QUDTBDpFvLfRQyi7Ni_QO7K9s98-67RYRUgAm1Q4ivDIaNPzdCeaWFuP4f_5t4BNO2Kj9Eerj83_HXjQnTSj9fOED5EwVJTrRQ3R_IlZKA4PnmpcGk7ryIvUjwQW4VM2t13LyNwqqM0',
  apex:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCXQpZNeBp5-FRg68wqGOoLLh1WdpE8FOC2d5-4l1RiAtJCsH8Tx25_XjQzcu9-o9yQF2mZ2u03UwunOJWCbqQkHWTLAm93GwUBAB4Kv2pdsTySPtwMHXKyU1IcrhyBayoku0sxE0D9Blc0MQa-KlFVLPaU6KxX7lV5cg7J-Vc6ZK6jVeRP3eW-AjPDwoaylY4hIoHf6vKBi1H1odREGXGgwB9u14xEhHCQn3VHil8WP3gErpbhsR0CbxKQ8XW9tcKLOUGjR7bIGOE',
  trendingFlow:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCsUCjXjBdC4RSOtcob6pAc5ymXyIASIoFBjP6O_GUgA8EQwYIufkyVTYuPZyDdzmUK_d4t8ALPXzHOFFypNjw58AqFCahdWo0T9HgFBuJhrIuQ61-QiX0_9X6FY3y9yt2QISshCj69eYvCS0zPCjpAO1EAQaFTPf1MPUVpVhE9SfP5suN_nYxxiOQOuYyGm03RLrM_IL5FpspFPDANXwx09YUpcyTyyVfdAalMoAhFXX1nAs6k065ZW5PXYBiuWnziST67ggh8L0s',
  trendingAero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUgQOvZHZaQwdR2gHdeJwPHotJ6_2uy9IQ5l8s7eC0hV3bot5tIa0gbMxXYtwVLw4D-dW4NiDTWsm5UwrLDv6Ab932c_0toM4xxDedEoHIXmtUtX2Q4DewuItyy7oyGmBfowJN_maUKtT-C49L-7KdIFLEIGlPhIJRYFjfzz91q3HoaE6J58Yp_D__whNH2W_T6DuLAw8jmTyESo1d9yLSdVESdFnmX_IbTCtBcyTpBmWVL8_Hh_RNa-dImRiiL_ciMay3d6Gjje4',
  lifeFlow:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCWGySja0aQcN5KvWb7XSfxyruz_2NyB8jEOgV94oynkFwlsYDcrp4UXwo8WtF5YoLPG0co2RYGyQiJsVSXGCJlfuXUAQY7VHyax_0bxW3ztazdeecOyJzByf0sr7tauBCnrxX1j15xQaZ2FAuGSd8TId8fMa2keF_gTrYWXIIXtuKGOr1ucPeWFVJuyCBJgh63DVi8I4L5jAr1Skg9-AhrIyzHES0nRwqOGFWvZZLP7LySIi17Nn_HEKiDXlj6cDi5v9IZ1QVWRoE',
  lifeAeroLux:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAoSqj5Rb2T32v4SdFVwElZ3uPJ550UgcV4sQ-2Y0epeDkgcRix2mjqtOPsMBHUGNYOy8jCu9JXiA37b3FdVg5f1ZgCwo5FpJo-LlOpA6jyZ3wzNCffCNTrCehwiwVfHhQbpc-bC4Uy-xczPym5e2lofTSFCL_GfCIa1f2cOmy7hQP0ajxav6mXJVF-KsKgtl6fZZUxjeghwHRyECY2A4aeMFNBWY6P2VchCRlySaykdkey-OnBx_u-90Ap_Lew2ayxKDimknFNwoY',
  lifeVelocity:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDGtxq05RFg_a79TzcVIZeTa6K2C0uJl7lNFaiAYTivct6Ud3kumLR86nKGn49SapQ3RLohqqCML1ae_Kxq_JBt7EmCUN562Vny4yNSQisiNPDOacY8c7F7I5KtsKSYt89QGLjl1IyCqbIiwlGVv6KxOdsUKsYrugGhl-bKM2zX6Nzm6wZWChuQ2Hf1ncZbGVEJ5EFJXQucFql6jlVkAr7vzi1yzi8d26KRQl9Uz1kCIultN_SB4UT0aZfMLFQe9X9y1XCo4mOE2vs',
  lifeScarlet:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYo7sO3Hg18FPm3cIjnggztEbmSjcFoYwDTxQW1CTAREFk3qNl_9FqDQTUW41iv3OzMUcBU9b4I7zJUyUqwaPT4gPIpo59O8pS9ZCDrbPyaudxz3M5bWokWLmQGCD7xrQmf3e6eyhgw_tq2SwpBGmoQcjTYLumgOc5aMDHcT45OkDjGwSXVSN7QlNGG8RzVNsW71rSg9pcy_yfpPj259m9cFJF2GXZj_t8Kzt7mU54D1hhHxrC31OxU385w0pJOAYNvHooYcCVA8',
  lifeElement:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmJFN_bgJycM55Rrgx7SXpzPR7Tuho6XnpZFGwNxX10vyVsAq80rCPjcJt4aufc_FRhLoexYmVxQ2uoV9hXw6Xicgkg5cEB_SRzoTRMX8YDfEan40Dp9oaaZZDeb1piOEogaUvPkHehOmwXritNXtQ6pnMBNc-37sBtBLz32GRSRX7PiAieBYRUXJ36iEHhDPj1G0eEbas486rdfODh2yhlgQxRBTIbbXNMs9g8uVoGFK6BUntRckhL4iKiqS4bwnws9LzFhTa19U',
  lifeVoid:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDRkhAQ9WDdufeeH2rOYSjp8FmUb2Uu_9NIbkFjTfBfTDEWVUVEdXNf5VT5_y1GnUuwaNB0xH08Jo8VfwUmWMuKFOSyxiNKoCQNQlMdP6W4rjAUjAlIrwGT89gBRxhJEIX_jWffcWek3pzk4Z0tB0AVVq3ie5BMxsJE3lNukMki_WAAgyvC9pgJbRQGxKb65hS0SoQZmWkwVOngdBh2LLZ_-VhhZ3mnkwF6QggiYB64Y5e2gyU-Wl30YwpTxSPEk7MM71IeUTAm4I8',
  alphaHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBndKclmj3h_u_z0o4h4zUlMH-vLfwgg5iSNOyzdpzO-_7H5-Or_kWENzfSvAEKtFhyANRzR6zoTfnvR8zO2Ogp_jFtEJWeJarD4tMOG5F5TfTyKPMVH3STzJslr3hlCZ1WmKOm5rypvqLq7C3ImOeNls9otdx-Fcs36myntFZXFDTRJvm8RNrtRua5RRDnYh3jw7mupp4uyy4zkS8cANqZlY58h1z-QG-ESOo4tQR2nGGe7y50eRwMHM6BjzWmtUAf1XJNK3PxQL0',
  gallery1:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDfwiqP8xVOUipwGvHHlTdcgws4keFNBQR65qZwI65MR9gHulDlUPeh2cbqOSK9_IZ-9Yjymgt4i-YStMS5MFBFltQ5A1b1M2qmHqiVWeA5eOaMVRutSF8lf3638xnIvkoS-WjqNVXQpB-XJRujEZUrwZStqdgqqcd65VuYWu9Xha08mmEhAG0iUsHcJ1SHFE0v08sxAt36fxysOjVOsKuFCkdAmkGdkiSMhUDDpOFGf5cdaEId4zMmNTebf-Fp0enqTamjue0P9XQ',
  gallery2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCtXPNTsH3xwOlpv-5tSKTKI1sVlpXBTjW1E7WtjpSiq2p1YILO_yGTvBcF_V-d2SOrqeZF22gB3aKkWjASWVePCFb8LfaWR0TJJKlXTgRV46sXzGpLxLsorwu_slF32Us66SoMtEIV_l_2DKERf3vW6V8Ld-cPFZJv1_wstc23TDrllNWcXGALbnS9nlXl2-P1qrjKZFE3jHpX2CdY_DtoN7LiyvXG4jXuTWoxZ2t9zilsLLFo7Rge1UyWjjdzW8OOcoEMivhYTPk',
  gallery3:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmN5oMT27xKiZ1Yaub6ciezIoBkScpMUsG0Mq3-vxQP1_fzshR-N7E9EqesRZ3T9a6dLLFBD9N3aWN2oSOHERD_1GG3k047cVX6cORIqLcWQv2lIbS_ncnk_6Jcmj1LY6OhzWRzCJi20ooRG_0q6-SO-iIjgRewinv5G-EsMzvnwrZwRjaLDF0K7hrG8z6IT0ny2G4WKYncwAeBKY4iAgD2p0tNEGSlEWzD6lmLZllDjmN3H-hqUSzejePuf_7Y-a5ZWpqMjuzUtw',
  kineticDelta:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAEwGVSbk6YjgIy7_b1gDi7NqOjvdftCtl2tX_nwE7w6JzNFFUHsKjvGBqnsOxjzkLxZ7GyEHO6LZotY39GGhu-8ihKjnEyIu42XNHSrJnGsczwTn1zrJ-6EqKuuSrSBwIhHMKuhOkTeLJ9GBMRXW3AtjjwAct4UftYMvDko3wDgiaPlj6Bza_TkJ1T9HXv7Yw_LgVMtjuaQRAbE2PB_rHTAgagQ5_7kh5ty4RnJk5jk6p6UEtjZ99WsocL8iH680TdIa0o_-0R_KU',
  omniTrainer:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCBouH9lh-Y9TBdGPR5M0zGmZtfkzD9x2e0rtPUkQcbFgiNKdh_1B_1HIvOYYdMCO4CPWnMTgBcxhAsylz7H5R73JTOE5KT0zsqUPfkE1CDyd81IHRTC-5ZG5zDzXeJRqmgWln599PZJcEnYxfg9AmNUER83BMd-a7PiATM7dVOE38hzN8sv0L77NDnWg5KdsBRIUFX1_qRrAf_ef8Om9VxVEX1IrOZokxLDkbk9pJBDS_bAWe3m2DDIDJTf8yzl2ufCJWN9TIVZSg',
  kineticOmega:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB_rbX27i7g5moMbh7orfk2EQYK1CEPyE5iOFpmfHasvA5vjGhQBRMdzv8x_kkmpYK6OBg-rNlFs-7ohxPi5o6g7HpKPdCy_VKrnSGj9aSqPQg9N6Lg37psV-g6G6UnKkcbgdGXCzoYuPfvdcMGZf5TAPPPg2G4bZ0g7S2wt5eyY-ls8S3s7OTNZ9Yb279i4rCTaZGkgHBBp2XyZiefi0iU34iHStDEo8BDYRUQSixOUvKvHYgoNghUhkQvfNsnDT7wpC8UrTYXn18',
  quantumPro:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDGpV9bwEUqhQ8BZX-7c4mToy3SW2aqqnSnhufqhw7Z0BqIuWuvVbUsQCkgjYBX8e8gQEK_yyRcN5lb9H5uDL_HdIjkIhbX9LnkEk23_UqZXNfd055bEK8jiZtxQkXKFulMZWqsP1JccRgVbtpVNNAykh_dVP_pBulV5MbRbB08HwvhHaxUkW22EfWiU8N4OB1iC349JuQ_5jg7kSC6cHhZ7h08ufm4MQin1FYlgtcBBHBxHszFzDZlhz36XI_ZZ4ncI-nBzQ_IzY8',
  carbonElite:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCPvOAVOyFgE3et-DuY6qbTf4taDW7YklW0-TYEtvsQcaI0G06FFEwasZQPs8SJ9t7lzRe0d58B2rHXnHhpyJV21cYroYezVJ-SW_EYkQJBoXNO_MA2_UHXmCnL_TKSHtTt-K3Hmr20_qww9G5bczDxLwhvdcWLE9hzv1ASgc2F9ISrGDHJdBoC4Hq-ZcbwUhSu_cG8XdB06_jNHNFisk-gS9KN0zqvbTDJ4H7tUw5irYX9ETaBI8mM_TeLTs3fS04k4CGMowwcnLU',
  novaBlitz:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBwz0ZzewiL1rIwhcNPfUK-DOtN99ibNKQElyrsy8FpR9VZhtWTty-Hu71ErDJbOSjKLq_KktKs-QBxlnHUYP0rqut1SsPWeLHg2--yfEnJJeIat36D5BDJqZatYq00iWC1-bTrZLTJSyJlvGxwCqRoVIfh6sdgQG11qfTHCKBiQUMoVSDEHEau2awRq8jLGo8wlWakMj-Y3pvzO5v6w5KFlNL3vBeVUnZw4jDDn9hL3RBbUxTrqSY9baz6bcTYPCUjxWa32Mu-EnY',
  cyberWalk:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBGx8RGrAGVLp2Q0SUgeYCm5iwSt7Ib7g-iGDA0B1d6ASCRO42LaFlYK8DhiWehxnroHNatMi6Fs-e7otDX2O6C8geT_7bm0XAUh79Sv4mRJWmf8_XZ_hU0BKRCoshJUlEwQGw9vkTDesdF7dKNZHDZd-vnPc9Rifol5lVngL3G5rRFodatQI4Xeo6YUwzCNQ2EZOGR4RgX_E0QN16sx9_1TUYA8VTUOqDBLYrHqK6PYSN61Qp43wY4YvHXowGZX_BlHCzrvQqTZtQ',
}

const RUN_SIZES = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12']
const PERF_SIZES = ['8', '8.5', '9', '9.5', '10', '10.5', '11', '12']
const BBALL_SIZES = ['8', '9', '10', '11', '12', '13', '14', '15']
const LIFE_SIZES = ['7', '8', '9', '10', '11', '12']

export const PRODUCTS = [
  // ─── KINETIC ALPHA (flagship) ──────────────────────────────────────
  {
    slug: 'kinetic-alpha',
    name: 'KINETIC ALPHA',
    tagline: 'Carbon-plated propulsion',
    category: 'Performance',
    useCase: 'Elite Performance',
    sku: 'KA-2024-V1',
    badge: 'Flagship',
    badgeTone: 'accent',
    price: 285,
    description:
      'Engineered for explosive propulsion. The Alpha features our proprietary NITRO-FUSE foam technology and a full-length carbon-fiber plate for maximum energy return.',
    heroImage: IMG.alphaHero,
    gallery: [IMG.gallery1, IMG.gallery2, IMG.gallery3, IMG.alphaHero],
    colors: [
      { name: 'Onyx Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Bone White', hex: '#fafafa', ringClass: 'ring-white/30' },
      { name: 'Slate Grey', hex: '#6b7280', ringClass: 'ring-white/20' },
    ],
    sizes: PERF_SIZES,
    soldOutSizes: ['12'],
    specs: [
      {
        icon: 'air',
        title: 'NITRO-FUSE MIDSOLE',
        desc: 'A proprietary nitrogen-infused TPU blend that delivers 85% energy return while remaining ultra-lightweight at only 210g.',
        wide: true,
      },
      {
        icon: 'architecture',
        title: 'AERO-MESH',
        desc: 'Heat-mapped ventilation zones for maximum breathability during elite performance.',
      },
      {
        icon: 'bolt',
        title: 'PROPULSION',
        desc: 'Full-length carbon plate geometry designed for aggressive toe-off.',
      },
    ],
    features: ['85% energy return', '210g lightweight build', 'Carbon-fiber plate'],
    stockStatus: 'In Stock',
  },

  // ─── SHOP CATALOG ─────────────────────────────────────────────────
  {
    slug: 'vortex-elite-x1',
    name: 'VORTEX ELITE X1',
    tagline: 'Carbon Fiber Racing Shell',
    category: 'Performance',
    useCase: 'Race Day',
    sku: 'VX-X1-2024',
    badge: 'New Drop',
    badgeTone: 'accent',
    price: 285,
    description:
      'A featherweight racing shell with a carbon-fiber chassis. Built for sub-3 marathon ambitions and pure speed obsessives.',
    heroImage: IMG.vortex,
    gallery: [IMG.vortex, IMG.gallery1, IMG.gallery2, IMG.alphaHero],
    colors: [
      { name: 'Inferno Red', hex: '#ef4444', ringClass: 'ring-red-500/30' },
      { name: 'Stealth Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
    ],
    sizes: RUN_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'speed',
        title: 'CARBON CHASSIS',
        desc: 'Unidirectional carbon plate molded into the midsole — engineered for explosive forward propulsion at race pace.',
        wide: true,
      },
      {
        icon: 'fast_forward',
        title: 'SPEED COLLAR',
        desc: 'Asymmetric collar geometry reduces achilles friction over the marathon distance.',
      },
      {
        icon: 'feather',
        title: '180G FRAME',
        desc: 'The lightest race shell in our lineup, with zero structural compromise.',
      },
    ],
    features: ['Carbon-fiber plate', 'Sub-180g construction', 'Race-tuned outsole'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'aero-prism-01',
    name: 'AERO PRISM 01',
    tagline: 'GORE-TEX Adaptive Mesh',
    category: 'Lifestyle',
    useCase: 'All-Weather Daily',
    sku: 'AP-01-2024',
    badge: null,
    badgeTone: 'neutral',
    price: 320,
    description:
      'Weatherproof technical sneaker built around a seamless GORE-TEX upper. Where wet-pavement utility meets minimalist street aesthetic.',
    heroImage: IMG.aeroPrism,
    gallery: [IMG.aeroPrism, IMG.gallery2, IMG.gallery1, IMG.lifeAeroLux],
    colors: [
      { name: 'Cloud White', hex: '#fafafa', ringClass: 'ring-white/30' },
      { name: 'Storm Grey', hex: '#94a3b8', ringClass: 'ring-white/20' },
      { name: 'Midnight Navy', hex: '#1e3a8a', ringClass: 'ring-blue-500/30' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'water_drop',
        title: 'GORE-TEX SHELL',
        desc: 'Fully waterproof, breathable membrane bonded to a seamless knit upper. Stays dry without bulk.',
        wide: true,
      },
      {
        icon: 'shield',
        title: 'PRISM TPU CAGE',
        desc: 'Translucent overlays deliver lateral stability without adding visual weight.',
      },
      {
        icon: 'cloud',
        title: 'CLOUD-FOAM',
        desc: 'Soft on-foot feel calibrated for 12-hour wear.',
      },
    ],
    features: ['Waterproof upper', 'Seamless knit construction', '12-hour comfort'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'cinetiq-reactor',
    name: 'CINETIQ REACTOR',
    tagline: 'Kinetic Energy Recovery Sole',
    category: 'Training',
    useCase: 'Gym + HIIT',
    sku: 'CR-RX-2024',
    badge: null,
    badgeTone: 'neutral',
    price: 245,
    description:
      'A cross-training workhorse with a wide stability base and elastic energy return. Built to flex through squats and explode through sprints.',
    heroImage: IMG.cinetiq,
    gallery: [IMG.cinetiq, IMG.gallery3, IMG.gallery1, IMG.vortex],
    colors: [
      { name: 'Volt Green', hex: '#84cc16', ringClass: 'ring-lime-500/30' },
      { name: 'Carbon Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
    ],
    sizes: PERF_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'fitness_center',
        title: 'STABILITY DECK',
        desc: 'Wide forefoot platform with reinforced sidewalls keeps you planted under load.',
        wide: true,
      },
      {
        icon: 'autorenew',
        title: 'ENERGY RECOVERY',
        desc: 'Elastomeric heel pad returns up to 78% of impact energy on landing.',
      },
      {
        icon: 'directions_run',
        title: 'MULTI-SURFACE GRIP',
        desc: 'Hex-pattern outsole rubber holds on rope-climb, sled-push, and turf.',
      },
    ],
    features: ['Wide stability base', '78% impact return', 'Multi-surface outsole'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'titan-forge-low',
    name: 'TITAN FORGE LOW',
    tagline: 'Synthetic Exoskeleton Frame',
    category: 'Basketball',
    useCase: 'Hardwood',
    sku: 'TF-LO-2024',
    badge: null,
    badgeTone: 'neutral',
    price: 410,
    description:
      'A low-cut hooper built around a Pebax exoskeleton. Court-locked stability with the freedom of a low-top silhouette.',
    heroImage: IMG.titan,
    gallery: [IMG.titan, IMG.gallery2, IMG.kineticDelta, IMG.quantumPro],
    colors: [
      { name: 'Court Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Bone White', hex: '#fafafa', ringClass: 'ring-white/30' },
      { name: 'Royal Blue', hex: '#2563eb', ringClass: 'ring-blue-500/30' },
    ],
    sizes: BBALL_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'shield',
        title: 'PEBAX EXOSKELETON',
        desc: 'External frame locks the foot during hard cuts and lateral drives.',
        wide: true,
      },
      {
        icon: 'sports_basketball',
        title: 'COURT TRACTION',
        desc: 'Herringbone outsole optimized for indoor maple — grips, releases, never grabs.',
      },
      {
        icon: 'bolt',
        title: 'EXPLOSIVE LAUNCH',
        desc: 'Forefoot air unit calibrated for vertical pop.',
      },
    ],
    features: ['Exoskeleton lockdown', 'Herringbone court grip', 'Forefoot air unit'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'ghost-runner-4d',
    name: 'GHOST RUNNER 4D',
    tagline: '4D-Printed Lattice Midsole',
    category: 'Running',
    useCase: 'Long Distance',
    sku: 'GR-4D-2024',
    badge: 'Limited',
    badgeTone: 'accent',
    price: 550,
    description:
      'A halo product. Our 4D-printed lattice midsole tunes cushion zone-by-zone — soft at heel strike, springy at toe-off, light through the entire stride.',
    heroImage: IMG.ghost,
    gallery: [IMG.ghost, IMG.gallery1, IMG.alphaHero, IMG.aeroPrism],
    colors: [
      { name: 'Spectral White', hex: '#fafafa', ringClass: 'ring-white/30' },
      { name: 'Glacial Mint', hex: '#a7f3d0', ringClass: 'ring-emerald-300/30' },
    ],
    sizes: RUN_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'view_in_ar',
        title: '4D LATTICE',
        desc: 'Printed lattice cells vary density across the midsole — tuned by gait scan, not molded by hand.',
        wide: true,
      },
      {
        icon: 'air',
        title: 'GHOST UPPER',
        desc: 'Translucent monofilament weave: lighter than mesh, more breathable than knit.',
      },
      {
        icon: 'science',
        title: 'LAB TESTED',
        desc: 'Validated at the KINETIC labs across 1,200 km of run-test data.',
      },
    ],
    features: ['Zone-tuned 4D lattice', 'Monofilament ghost upper', '1,200 km lab tested'],
    stockStatus: 'Limited',
  },
  {
    slug: 'apex-stryke-blue',
    name: 'APEX STRYKE BLUE',
    tagline: 'Impact Responsive Cushioning',
    category: 'Running',
    useCase: 'Daily Trainer',
    sku: 'AS-BL-2024',
    badge: null,
    badgeTone: 'neutral',
    price: 195,
    description:
      'Your everyday mileage shoe. Tuned for relaxed pace, easy rotation, and an honest-day stack of springy cushion.',
    heroImage: IMG.apex,
    gallery: [IMG.apex, IMG.gallery2, IMG.gallery3, IMG.cinetiq],
    colors: [
      { name: 'Cyan Surge', hex: '#06b6d4', ringClass: 'ring-cyan-500/30' },
      { name: 'Deep Ocean', hex: '#0c4a6e', ringClass: 'ring-blue-500/30' },
    ],
    sizes: RUN_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'autorenew',
        title: 'RESPONSE FOAM',
        desc: 'Dual-density EVA blend: soft surface layer, supportive base. Forgiving on long easy miles.',
        wide: true,
      },
      {
        icon: 'directions_run',
        title: 'DAILY GEOMETRY',
        desc: 'Neutral last for honest stride mechanics — no overcorrection.',
      },
      {
        icon: 'eco',
        title: 'RECYCLED YARN',
        desc: '60% post-consumer recycled polyester woven into the upper.',
      },
    ],
    features: ['Dual-density foam', 'Neutral geometry', '60% recycled upper'],
    stockStatus: 'In Stock',
  },

  // ─── TRENDING (homepage carousel) ─────────────────────────────────
  {
    slug: 'flow',
    name: 'KINETIC FLOW',
    tagline: 'Daily run flow state',
    category: 'Running',
    useCase: 'Tempo Runs',
    sku: 'KF-2024',
    badge: 'Trending',
    badgeTone: 'accent',
    price: 240,
    description:
      'The shoe that disappears under your foot. Flow is built for the moment you stop counting miles and just run.',
    heroImage: IMG.trendingFlow,
    gallery: [IMG.trendingFlow, IMG.gallery1, IMG.lifeFlow, IMG.apex],
    colors: [
      { name: 'Triple Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Onyx', hex: '#1f1f1f', ringClass: 'ring-white/10' },
      { name: 'Pearl', hex: '#f5f5f5', ringClass: 'ring-white/30' },
    ],
    sizes: RUN_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'waves',
        title: 'FLOW FOAM',
        desc: 'A medium-soft EVA core with a snappy rebound layer that wakes up as you accelerate.',
        wide: true,
      },
      {
        icon: 'directions_run',
        title: 'ROCKER GEOMETRY',
        desc: 'Subtle forefoot rocker rolls you forward without overcorrecting your stride.',
      },
      {
        icon: 'air',
        title: 'KNIT UPPER',
        desc: 'Stretch knit that disappears around the foot. No hot spots, ever.',
      },
    ],
    features: ['Rocker geometry', 'Hot-spot-free knit upper', 'Snappy rebound layer'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'stealth',
    name: 'STEALTH VOLT',
    tagline: 'Lockdown on the court',
    category: 'Basketball',
    useCase: 'Outdoor + Indoor',
    sku: 'SV-2024',
    badge: 'Trending',
    badgeTone: 'accent',
    price: 290,
    description:
      'A versatile hooper built for switchable defense. Stealth Volt locks the foot through the cut and explodes through the rim.',
    heroImage: IMG.titan,
    gallery: [IMG.titan, IMG.gallery3, IMG.kineticDelta, IMG.alphaHero],
    colors: [
      { name: 'Stealth Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Volt Yellow', hex: '#eab308', ringClass: 'ring-yellow-500/30' },
    ],
    sizes: BBALL_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'shield',
        title: 'MIDFOOT STRAP',
        desc: 'Integrated TPU strap snaps the midfoot into place during direction changes.',
        wide: true,
      },
      {
        icon: 'sports_basketball',
        title: 'TRACTION POD',
        desc: 'Multi-directional pods bite hardwood and resist dust on outdoor courts.',
      },
      {
        icon: 'bolt',
        title: 'LAUNCH PLATE',
        desc: 'Carbon shank under the arch transfers energy edge-to-edge.',
      },
    ],
    features: ['Midfoot lockdown strap', 'Indoor + outdoor traction', 'Carbon shank'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'aero',
    name: 'AERO LUX',
    tagline: 'Luxury lifestyle silhouette',
    category: 'Lifestyle',
    useCase: 'Off-Duty',
    sku: 'AL-2024',
    badge: 'Trending',
    badgeTone: 'accent',
    price: 350,
    description:
      'A premium lifestyle silhouette finished in tonal leather and engineered mesh. Built to be the cleanest pair in the room.',
    heroImage: IMG.trendingAero,
    gallery: [IMG.trendingAero, IMG.lifeAeroLux, IMG.aeroPrism, IMG.gallery2],
    colors: [
      { name: 'Cloud Lux', hex: '#fafafa', ringClass: 'ring-white/30' },
      { name: 'Volt Blue', hex: '#3b82f6', ringClass: 'ring-blue-500/30' },
      { name: 'Tobacco', hex: '#92400e', ringClass: 'ring-amber-700/30' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'diamond',
        title: 'PREMIUM LEATHER',
        desc: 'Full-grain Italian leather paired with engineered mesh inserts.',
        wide: true,
      },
      {
        icon: 'auto_awesome',
        title: 'TONAL HARDWARE',
        desc: 'Color-matched metal lace anchors and heel pull-tab.',
      },
      {
        icon: 'cloud',
        title: 'LUX FOAM',
        desc: 'Plush all-day cushion that softens the city.',
      },
    ],
    features: ['Italian leather upper', 'Tonal hardware', 'All-day lux foam'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'gravity',
    name: 'GRAVITY X',
    tagline: 'Training force returned',
    category: 'Training',
    useCase: 'Gym Days',
    sku: 'GX-2024',
    badge: 'Trending',
    badgeTone: 'accent',
    price: 210,
    description:
      'A grounded training shoe with a wide, low-to-the-floor platform. Gravity X keeps you connected to every rep.',
    heroImage: IMG.cinetiq,
    gallery: [IMG.cinetiq, IMG.gallery1, IMG.omniTrainer, IMG.apex],
    colors: [
      { name: 'Volt Green', hex: '#84cc16', ringClass: 'ring-lime-500/30' },
      { name: 'Carbon Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
    ],
    sizes: PERF_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'fitness_center',
        title: 'GROUNDED PLATFORM',
        desc: 'Low stack height keeps you stable through heavy compounds.',
        wide: true,
      },
      {
        icon: 'pivot_table_chart',
        title: 'FLEX GROOVES',
        desc: 'Forefoot grooves articulate naturally during jumps and sprints.',
      },
      {
        icon: 'shield',
        title: 'ROPE GUARD',
        desc: 'Reinforced midfoot wrap survives rope climbs without fraying.',
      },
    ],
    features: ['Low-to-floor stack', 'Forefoot flex grooves', 'Rope-climb reinforced'],
    stockStatus: 'In Stock',
  },

  // ─── LIFESTYLE COLLECTION ─────────────────────────────────────────
  {
    slug: 'kinetic-flow',
    name: 'KINETIC FLOW',
    tagline: 'Triple Black / Onyx',
    category: 'Lifestyle',
    useCase: 'Everyday Rotation',
    sku: 'LF-KF-TBO',
    badge: 'New Drop',
    badgeTone: 'accent',
    price: 340,
    description:
      'A lifestyle-tuned Flow finished in deep onyx. Softer cushion, premium materials, made for streets that never sleep.',
    heroImage: IMG.lifeFlow,
    gallery: [IMG.lifeFlow, IMG.trendingFlow, IMG.gallery2, IMG.lifeVoid],
    colors: [
      { name: 'Triple Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Deep Onyx', hex: '#1f1f1f', ringClass: 'ring-white/10' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'dark_mode',
        title: 'TONAL BLACK',
        desc: 'Every panel finished in matched onyx — laces, eyelets, sole, swoosh.',
        wide: true,
      },
      {
        icon: 'cloud',
        title: 'PLUSH FOAM',
        desc: 'Lifestyle-tuned cushion that prioritizes comfort over response.',
      },
      {
        icon: 'auto_awesome',
        title: 'PREMIUM MATERIALS',
        desc: 'Suede heel collar and waxed laces elevate the silhouette.',
      },
    ],
    features: ['Tonal blackout', 'Suede heel collar', 'Plush lifestyle foam'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'aero-lux',
    name: 'AERO LUX',
    tagline: 'Cloud / Volt Blue',
    category: 'Lifestyle',
    useCase: 'Premium Daily',
    sku: 'LF-AL-CVB',
    badge: null,
    badgeTone: 'neutral',
    price: 420,
    description:
      'The flagship of our lifestyle line. Cloud-white leather, accented with electric volt blue, tuned for the cleanest fit in your rotation.',
    heroImage: IMG.lifeAeroLux,
    gallery: [IMG.lifeAeroLux, IMG.trendingAero, IMG.aeroPrism, IMG.gallery3],
    colors: [
      { name: 'Cloud', hex: '#fafafa', ringClass: 'ring-white/30' },
      { name: 'Volt Blue', hex: '#3b82f6', ringClass: 'ring-blue-500/30' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'diamond',
        title: 'CLOUD LEATHER',
        desc: 'Soft full-grain leather treated for stain resistance.',
        wide: true,
      },
      {
        icon: 'flash_on',
        title: 'VOLT ACCENTS',
        desc: 'Electric blue stitching pops on a neutral base.',
      },
      {
        icon: 'cloud',
        title: 'LUX MIDSOLE',
        desc: 'Plush, tall stack tuned for city miles.',
      },
    ],
    features: ['Stain-resistant leather', 'Volt blue stitching', 'Tall lux stack'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'velocity-shift',
    name: 'VELOCITY SHIFT',
    tagline: 'Cyber Lime / Slate',
    category: 'Lifestyle',
    useCase: 'Statement Daily',
    sku: 'LF-VS-CLS',
    badge: null,
    badgeTone: 'neutral',
    price: 290,
    description:
      'A statement lifestyle pair finished in cyber lime against slate. For pavement that asks to be noticed.',
    heroImage: IMG.lifeVelocity,
    gallery: [IMG.lifeVelocity, IMG.cinetiq, IMG.gallery1, IMG.gallery2],
    colors: [
      { name: 'Cyber Lime', hex: '#a3e635', ringClass: 'ring-lime-400/30' },
      { name: 'Slate Grey', hex: '#475569', ringClass: 'ring-white/10' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'flare',
        title: 'CYBER COLORWAY',
        desc: 'Reactive lime panels designed to catch street light.',
        wide: true,
      },
      {
        icon: 'route',
        title: 'CONTRAST STITCH',
        desc: 'Slate threading frames every panel.',
      },
      {
        icon: 'cloud',
        title: 'SOFT FOAM',
        desc: 'Lifestyle midsole tuned for long walks.',
      },
    ],
    features: ['Reactive lime panels', 'Slate contrast stitching', 'Long-walk midsole'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'scarlet-pulse',
    name: 'SCARLET PULSE',
    tagline: 'Infrared / Matte',
    category: 'Lifestyle',
    useCase: 'Evening Drop',
    sku: 'LF-SP-IM',
    badge: null,
    badgeTone: 'neutral',
    price: 380,
    description:
      'A statement red lifestyle silhouette with a matte topcoat finish. Built to anchor a fit, not blend into it.',
    heroImage: IMG.lifeScarlet,
    gallery: [IMG.lifeScarlet, IMG.vortex, IMG.gallery3, IMG.lifeElement],
    colors: [
      { name: 'Infrared', hex: '#dc2626', ringClass: 'ring-red-500/30' },
      { name: 'Matte Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'palette',
        title: 'MATTE TOPCOAT',
        desc: 'Anti-gloss leather finish for a uniform tone in any light.',
        wide: true,
      },
      {
        icon: 'whatshot',
        title: 'INFRARED PANELS',
        desc: 'Saturated red contrast against deep matte.',
      },
      {
        icon: 'cloud',
        title: 'PULSE FOAM',
        desc: 'Lifestyle midsole with a subtle bounce.',
      },
    ],
    features: ['Matte anti-gloss finish', 'Infrared contrast panels', 'Subtle bounce midsole'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'element-one',
    name: 'ELEMENT ONE',
    tagline: 'Bone / Parchment',
    category: 'Lifestyle',
    useCase: 'Heritage Tonal',
    sku: 'LF-E1-BP',
    badge: null,
    badgeTone: 'neutral',
    price: 450,
    description:
      'A tonal bone-and-parchment silhouette built around heritage materials. Quiet luxury, made loud by craft.',
    heroImage: IMG.lifeElement,
    gallery: [IMG.lifeElement, IMG.lifeAeroLux, IMG.gallery2, IMG.aeroPrism],
    colors: [
      { name: 'Bone', hex: '#e7e5e4', ringClass: 'ring-white/20' },
      { name: 'Parchment', hex: '#f5f5dc', ringClass: 'ring-white/20' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'diamond',
        title: 'HERITAGE LEATHER',
        desc: 'Vegetable-tanned full-grain that ages with character.',
        wide: true,
      },
      {
        icon: 'auto_awesome',
        title: 'TONAL CRAFT',
        desc: 'Every component dyed to match — laces, midsole, eyelets.',
      },
      {
        icon: 'cloud',
        title: 'COTTON LINING',
        desc: 'Brushed cotton interior for an heirloom feel.',
      },
    ],
    features: ['Veg-tanned leather', 'Tonal dyed components', 'Brushed cotton lining'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'void-runner',
    name: 'VOID RUNNER',
    tagline: 'Silver / Ghost Grey',
    category: 'Lifestyle',
    useCase: 'Future Daily',
    sku: 'LF-VR-SGG',
    badge: null,
    badgeTone: 'neutral',
    price: 310,
    description:
      'A future-leaning lifestyle silhouette finished in metallic silver and ghost grey. For tomorrows you wear today.',
    heroImage: IMG.lifeVoid,
    gallery: [IMG.lifeVoid, IMG.ghost, IMG.gallery1, IMG.aeroPrism],
    colors: [
      { name: 'Silver', hex: '#cbd5e1', ringClass: 'ring-white/30' },
      { name: 'Ghost Grey', hex: '#9ca3af', ringClass: 'ring-white/20' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'auto_awesome',
        title: 'METALLIC COATING',
        desc: 'Reflective silver film bonded to a stretch knit base.',
        wide: true,
      },
      {
        icon: 'visibility',
        title: 'GHOST OVERLAY',
        desc: 'Translucent panels reveal layered construction.',
      },
      {
        icon: 'cloud',
        title: 'VOID FOAM',
        desc: 'Lightweight lifestyle cushion engineered for visual mass.',
      },
    ],
    features: ['Reflective metallic film', 'Translucent overlays', 'Lightweight visual stack'],
    stockStatus: 'In Stock',
  },

  // ─── DASHBOARD SAVED ITEMS ────────────────────────────────────────
  {
    slug: 'carbon-elite-x1',
    name: 'CARBON ELITE X1',
    tagline: 'Archive Collection',
    category: 'Performance',
    useCase: 'Archive Performance',
    sku: 'CE-X1-ARC',
    badge: 'Restock Soon',
    badgeTone: 'neutral',
    price: 240,
    description:
      'An archive resurrection. The X1 returns with the original carbon plate and updated foam stack — a love letter to elite runners.',
    heroImage: IMG.carbonElite,
    gallery: [IMG.carbonElite, IMG.gallery1, IMG.vortex, IMG.alphaHero],
    colors: [
      { name: 'Archive Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Bone', hex: '#e7e5e4', ringClass: 'ring-white/20' },
    ],
    sizes: RUN_SIZES,
    soldOutSizes: ['11', '11.5'],
    specs: [
      {
        icon: 'history',
        title: 'ARCHIVE LAST',
        desc: 'Original 2019 last paired with 2024 foam science.',
        wide: true,
      },
      {
        icon: 'bolt',
        title: 'CARBON PLATE',
        desc: 'Full-length carbon, unchanged from the original release.',
      },
      {
        icon: 'auto_awesome',
        title: 'HERITAGE BRAND',
        desc: 'Original archive logo treatment on the heel.',
      },
    ],
    features: ['2019 archive last', 'Original carbon plate', 'Heritage branding'],
    stockStatus: 'Restock Soon',
  },
  {
    slug: 'nova-blitz-v4',
    name: 'NOVA BLITZ V4',
    tagline: 'Performance Daily',
    category: 'Performance',
    useCase: 'Speed Workouts',
    sku: 'NB-V4-2024',
    badge: 'In Stock',
    badgeTone: 'neutral',
    price: 185,
    description:
      'The fourth-gen daily speed shoe. Lighter than V3, with more pop in the forefoot for tempo days that turn into PR days.',
    heroImage: IMG.novaBlitz,
    gallery: [IMG.novaBlitz, IMG.gallery2, IMG.apex, IMG.vortex],
    colors: [
      { name: 'Volt Surge', hex: '#facc15', ringClass: 'ring-yellow-500/30' },
      { name: 'Pure Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
    ],
    sizes: RUN_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'speed',
        title: 'V4 FOAM',
        desc: 'Reformulated PEBA blend — 12% lighter than V3, with snappier rebound.',
        wide: true,
      },
      {
        icon: 'directions_run',
        title: 'TEMPO LAST',
        desc: 'Slightly aggressive forefoot rocker for speed-day stride.',
      },
      {
        icon: 'fast_forward',
        title: 'RACE-READY',
        desc: 'Versatile enough for tempo, light enough for race day.',
      },
    ],
    features: ['PEBA-blend foam', 'Tempo-tuned rocker', 'Race-day light'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'cyber-walk-01',
    name: 'CYBER_WALK 01',
    tagline: 'Lifestyle / Future-tonal',
    category: 'Lifestyle',
    useCase: 'Future Lifestyle',
    sku: 'CW-01-2024',
    badge: 'Last 2 Left',
    badgeTone: 'neutral',
    price: 310,
    description:
      'A future-tonal lifestyle silhouette. Engineered overlays, translucent windows, and a chunky lifestyle stack.',
    heroImage: IMG.cyberWalk,
    gallery: [IMG.cyberWalk, IMG.lifeVoid, IMG.ghost, IMG.gallery3],
    colors: [
      { name: 'Tonal Steel', hex: '#9ca3af', ringClass: 'ring-white/20' },
      { name: 'Mono Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
    ],
    sizes: LIFE_SIZES,
    soldOutSizes: ['11', '12'],
    specs: [
      {
        icon: 'window',
        title: 'TRANSLUCENT WINDOWS',
        desc: 'TPU panels reveal layered construction beneath.',
        wide: true,
      },
      {
        icon: 'auto_awesome',
        title: 'CHUNKY STACK',
        desc: 'Bold midsole geometry for street presence.',
      },
      {
        icon: 'cloud',
        title: 'WALK FOAM',
        desc: 'Lifestyle-soft cushion for long city days.',
      },
    ],
    features: ['Translucent TPU windows', 'Chunky lifestyle stack', 'Long-day cushion'],
    stockStatus: 'Last 2 Left',
  },

  // ─── LEGACY RELATED PRODUCTS ──────────────────────────────────────
  {
    slug: 'kinetic-delta',
    name: 'KINETIC DELTA',
    tagline: 'All-purpose performance',
    category: 'Performance',
    useCase: 'Mixed Training',
    sku: 'KD-2024',
    badge: 'In Stock',
    badgeTone: 'neutral',
    price: 240,
    description:
      'A versatile all-rounder in the KINETIC lineup. Light enough to race, sturdy enough to train, cool enough to wear after.',
    heroImage: IMG.kineticDelta,
    gallery: [IMG.kineticDelta, IMG.gallery2, IMG.apex, IMG.cinetiq],
    colors: [
      { name: 'Mono Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Bone White', hex: '#fafafa', ringClass: 'ring-white/30' },
    ],
    sizes: PERF_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'sync',
        title: 'HYBRID FOAM',
        desc: 'A blend of race foam and daily-trainer foam, tuned for versatility.',
        wide: true,
      },
      {
        icon: 'directions_run',
        title: 'NEUTRAL GEOMETRY',
        desc: 'Forgiving last works for most foot shapes.',
      },
      {
        icon: 'eco',
        title: 'RECYCLED UPPER',
        desc: 'Single-yarn knit made from recovered ocean plastic.',
      },
    ],
    features: ['Hybrid foam blend', 'Neutral last', 'Recycled-yarn upper'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'omni-trainer',
    name: 'OMNI TRAINER',
    tagline: 'All-day training utility',
    category: 'Training',
    useCase: 'Multi-Sport',
    sku: 'OT-2024',
    badge: null,
    badgeTone: 'neutral',
    price: 195,
    description:
      'A multi-sport trainer ready for the studio, the gym, the trail, and the commute home. One pair for everything.',
    heroImage: IMG.omniTrainer,
    gallery: [IMG.omniTrainer, IMG.cinetiq, IMG.gallery1, IMG.apex],
    colors: [
      { name: 'Omni Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Forge Grey', hex: '#475569', ringClass: 'ring-white/10' },
    ],
    sizes: PERF_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'fitness_center',
        title: 'VERSATILE PLATFORM',
        desc: 'Stable enough for lifts, flexible enough for sprints.',
        wide: true,
      },
      {
        icon: 'directions_walk',
        title: 'WALK COMFORT',
        desc: 'Cushion tuned for 10,000-step days.',
      },
      {
        icon: 'shield',
        title: 'DURABLE OVERLAY',
        desc: 'Reinforced toe and heel survive abuse.',
      },
    ],
    features: ['Multi-sport platform', '10k-step cushion', 'Reinforced overlay'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'kinetic-omega',
    name: 'KINETIC OMEGA',
    tagline: 'Top-tier performance',
    category: 'Performance',
    useCase: 'Marathon Day',
    sku: 'KO-2024',
    badge: 'New Arrival',
    badgeTone: 'accent',
    price: 310,
    description:
      'The Omega is the apex of our performance line. Carbon plated, PEBA foamed, marathon engineered.',
    heroImage: IMG.kineticOmega,
    gallery: [IMG.kineticOmega, IMG.gallery3, IMG.alphaHero, IMG.vortex],
    colors: [
      { name: 'Apex Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Photon White', hex: '#fafafa', ringClass: 'ring-white/30' },
    ],
    sizes: RUN_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'rocket_launch',
        title: 'PEBA STACK',
        desc: 'Pure PEBA midsole tuned for maximum energy return per stride.',
        wide: true,
      },
      {
        icon: 'bolt',
        title: 'CARBON PLATE',
        desc: 'Full-length curved carbon plate with toe-spring geometry.',
      },
      {
        icon: 'science',
        title: 'WIND-TUNNEL TESTED',
        desc: 'Upper geometry refined for marathon-distance aerodynamics.',
      },
    ],
    features: ['Pure PEBA stack', 'Curved carbon plate', 'Wind-tunnel-tested upper'],
    stockStatus: 'In Stock',
  },
  {
    slug: 'quantum-pro',
    name: 'QUANTUM PRO',
    tagline: 'Premium technical sneaker',
    category: 'Performance',
    useCase: 'Pro Tier',
    sku: 'QP-2024',
    badge: null,
    badgeTone: 'neutral',
    price: 275,
    description:
      'A pro-tier technical sneaker for athletes who treat their training like a craft. Cushioned, light, precise.',
    heroImage: IMG.quantumPro,
    gallery: [IMG.quantumPro, IMG.gallery2, IMG.cinetiq, IMG.apex],
    colors: [
      { name: 'Quantum Black', hex: '#0a0a0a', ringClass: 'ring-black/50' },
      { name: 'Pro Silver', hex: '#cbd5e1', ringClass: 'ring-white/30' },
    ],
    sizes: PERF_SIZES,
    soldOutSizes: [],
    specs: [
      {
        icon: 'precision_manufacturing',
        title: 'PRO TUNING',
        desc: 'Calibrated by KINETIC pro athletes across two prototyping cycles.',
        wide: true,
      },
      {
        icon: 'directions_run',
        title: 'NEUTRAL FAST',
        desc: 'Neutral last with a slightly aggressive rocker.',
      },
      {
        icon: 'shield',
        title: 'PRO OUTSOLE',
        desc: 'Race-grade rubber compound for traction in any condition.',
      },
    ],
    features: ['Pro-tuned geometry', 'Race-grade outsole', 'Neutral-fast last'],
    stockStatus: 'In Stock',
  },
]

/**
 * Returns the product entry whose slug matches, or undefined.
 */
export function getProductBySlug(slug) {
  return PRODUCTS.find((product) => product.slug === slug)
}

/**
 * Returns up to `limit` products sharing the same category, excluding the current slug.
 * Falls back to other categories if there are not enough matches.
 */
export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug)
  if (!current) return []

  const sameCategory = PRODUCTS.filter(
    (p) => p.slug !== slug && p.category === current.category,
  )

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)

  const fillers = PRODUCTS.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  )

  return [...sameCategory, ...fillers].slice(0, limit)
}
