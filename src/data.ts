export type TDeed = {
  id: string;
  name: string;
  weight: number;
};

export const mockData: TDeed[] = [
  {
    id: '0',
    name: 'zero',
    weight: 0.5,
  },
  {
    id: '1',
    name: '0ne',
    weight: -0.5,
  },
  {
    id: '2',
    name: 'two',
    weight: 2,
  },
  {
    id: '3',
    name: 'three',
    weight: -1,
  },
];
