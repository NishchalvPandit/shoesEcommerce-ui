/** Minimum and maximum price bounds for the shop price-range filter. */
export const SHOP_PRICE_MIN = 150
export const SHOP_PRICE_MAX = 850

/** Available product categories for filtering. */
export const SHOP_CATEGORIES = [
  'Performance',
  'Lifestyle',
  'Training',
  'Running',
  'Basketball',
]

export const SHOP_PRODUCTS = [
  {
    id: 'vortex-elite-x1',
    name: 'Vortex Elite X1',
    subtitle: 'Carbon Fiber Racing Shell',
    category: 'Performance',
    price: '$285.00',
    popularity: 98,
    dateAdded: 6,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPSFMyBBKHVS6iHh710L7AvjSQC9AUJEAX4QTNB-dPSZSm_wWdzCg8Xf6NZl7WJn-Vf770aeJ5Tut2XxApxlU-v7IZ_G398nff3Y9KuYeQywaQcafBrleyT-46J3nAeH-i-0dv0HP9txBmuQWimkr74NQ0SsWoTD9dYtAWmmkrmApIjxP-8hlXk9rEnkpsZBfNOWnaqSRrWAOVMhyyqjPjpD_KnZgyU2WDynXqN9at_OrlWEHwvTXkSF1hoGhZWFT1-Z2yeuZqjWA',
    imageAlt:
      'Side view of performance sneaker red and black on dark radial gradient backdrop.',
    badge: 'new',
  },
  {
    id: 'aero-prism-01',
    name: 'Aero Prism 01',
    subtitle: 'GORE-TEX Adaptive Mesh',
    category: 'Lifestyle',
    price: '$320.00',
    popularity: 85,
    dateAdded: 4,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlLgdG24JxRY2Kcd6uP-B7LjGy7YrwQEllUlp6iyfZfzyDBqAytI1wPkA7xXDPsh0GKb-weHQuiPxltmk9P8zgpr2t7m2PupOnjRGszl9dkurbZ9ZbmT89Cs9bfXRrvNe8mhoT1pNPWtZiJtud090GJ-mepo0ll0lEXtWDbczJCU6coUCquDEowS233Eg2GpepJwk8Zxdp8_Wpv6fmul8Zej0y21zBnXA3fa3wzXYZ8hrSWEQFh-wvwHX6lRo2rT9DU3MXOGDAyHs',
    imageAlt: 'Technical white sneaker floating on dark radial lighting.',
    badge: null,
  },
  {
    id: 'cinetiq-reactor',
    name: 'Cinetiq Reactor',
    subtitle: 'Kinetic Energy Recovery Sole',
    category: 'Training',
    price: '$245.00',
    popularity: 90,
    dateAdded: 5,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SHZNXeFronplfhsEgKUi7OnSHXKAaBmCD-jrwuDHADqIpUbf2dw_rCCkCTzQQIHltRpt1pP9Lk_DUlmEviSdltlAIzVDxOmA8nYNTS8UHh9qIkKh7IOhTGueFV3g_VLPrKCbxmjOGEj3WQsLe_dybKecE9FkKUSPZxu2tGpg_mwbgAXfYyQzqIYaS5KXMWCWtPNwOxAgBhL44WXm1uOPzeW4V2O7VMd3da8VqPwmUDtd3ITv7hc79HkoUp44_uf1PTKC9T3ve0g',
    imageAlt: 'Neon green and black athletic sneaker on reflective dark surface.',
    badge: null,
  },
  {
    id: 'titan-forge-low',
    name: 'Titan Forge Low',
    subtitle: 'Synthetic Exoskeleton Frame',
    category: 'Basketball',
    price: '$410.00',
    popularity: 76,
    dateAdded: 3,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJHr9lNR3eiSClxiSbz23Qr0vYZguTOX6yTH5BY01FomIqSW4yUasA4VhltyZw4XYmYzZzapPq1EqWudVCK5NF7vTfeEDNCcLAvFUBP4ftNUSMYaHnyvfrOdNQ5UMRatfB5PVBveT_KYsCIgEOfVLox_6HIr0yZy_PDZ0KgH2vHhtKV-OS_60fTw80C1-y11DMicYNMZ_bBGYk71RZfzYJGu8aNrTN8HCABqcTqoR5pZtVEDr9vWwyPzZBCWx8ojLBmyi3pCtOR4',
    imageAlt: 'Black and white basketball sneaker on dark background.',
    badge: null,
  },
  {
    id: 'ghost-runner-4d',
    name: 'Ghost Runner 4D',
    subtitle: '4D-Printed Lattice Midsole',
    category: 'Running',
    price: '$550.00',
    popularity: 92,
    dateAdded: 2,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnqgEQGBuwRjXOL0dBKR57V4hrRRX629Tij8hHRMYE01QNfT_53gsy7Bf9t0YopP2UF6eIbjKDMuMN7bV4U6EpMuzhvwZGnwV2_F-cOx6FEoLoybO6Ph1z6LjWSD2gsXK9QUDTBDpFvLfRQyi7Ni_QO7K9s98-67RYRUgAm1Q4ivDIaNPzdCeaWFuP4f_5t4BNO2Kj9Eerj83_HXjQnTSj9fOED5EwVJTrRQ3R_IlZKA4PnmpcGk7ryIvUjwQW4VM2t13LyNwqqM0',
    imageAlt: 'White futuristic sneaker with ethereal glow underneath.',
    badge: null,
  },
  {
    id: 'apex-stryke-blue',
    name: 'Apex Stryke Blue',
    subtitle: 'Impact Responsive Cushioning',
    category: 'Running',
    price: '$195.00',
    popularity: 88,
    dateAdded: 1,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCXQpZNeBp5-FRg68wqGOoLLh1WdpE8FOC2d5-4l1RiAtJCsH8Tx25_XjQzcu9-o9yQF2mZ2u03UwunOJWCbqQkHWTLAm93GwUBAB4Kv2pdsTySPtwMHXKyU1IcrhyBayoku0sxE0D9Blc0MQa-KlFVLPaU6KxX7lV5cg7J-Vc6ZK6jVeRP3eW-AjPDwoaylY4hIoHf6vKBi1H1odREGXGgwB9u14xEhHCQn3VHil8WP3gErpbhsR0CbxKQ8XW9tcKLOUGjR7bIGOE',
    imageAlt: 'Blue and cyan athletic sneaker on dark textured surface.',
    badge: null,
  },
]
