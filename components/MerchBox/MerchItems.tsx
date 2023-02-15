type Merch = {
  price: string;
  title: string;
  url: string;
  available: boolean;
};

export const MerchItems: Array<Merch> = [
  {
    title: 'Blå crewneck m/ brodert jubileumslogo',
    price: '450',
    url: '/blåcrewMbrodert.png',
    available: true,
  },
  {
    title: 'Grå crewneck m/ limited edition logo',
    price: '450',
    url: '/GøyalVri.png',
    available: true,
  },
  {
    title: 'Lommelerke + fire shotteglass',
    price: '300',
    url: './lommelerke.png',
    available: true,
  },
  {
    title: 'Ølglass',
    price: '',
    url: './ølglass.png',
    available: false,
  },
  {
    title: 'Shotteglass',
    price: '',
    url: './shotteglass.png',
    available: false,
  },
];
