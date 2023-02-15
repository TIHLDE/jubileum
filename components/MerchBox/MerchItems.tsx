type Merch = {
  price: string;
  title: string;
  url: string;
  available: boolean;
};

export const MerchItems: Array<Merch> = [
  {
    title: 'Jubileumsgenser',
    price: '450',
    url: '/blåcrewMbrodert.png',
    available: true,
  },
  {
    title: 'TIHLDE-genser',
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
    price: '300',
    url: './ølglass.png',
    available: false,
  },
  {
    title: 'Shotteglass',
    price: '300',
    url: './shotteglass.png',
    available: false,
  },
];
