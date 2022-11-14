import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { mockData } from '../data';
import { DeedToolbarComponent, DeedListComponent } from '../features/deed-list';
import { TDeed } from '../features/deed-list/types';

type TFormInputs = {
  name: string;
  weight: number;
};

function DeedList() {
  const [deedsItems, setDeedsItems] = useState<TDeed[]>([] as TDeed[]);
  const [sins, setSins] = useState<TDeed[]>([] as TDeed[]);
  const [goodDeeds, setGoodDeeds] = useState<TDeed[]>([] as TDeed[]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setDeedsItems(mockData);
  }, []);

  useEffect(() => {
    setSins(deedsItems.filter(item => item.weight < 0));
    setGoodDeeds(deedsItems.filter(item => item.weight >= 0));
  }, [deedsItems]);

  useEffect(() => {
    setScore(
      deedsItems.reduce(
        (previousValue, currentItem) =>
          previousValue + Number(currentItem.weight),
        0,
      ),
    );
  }, [deedsItems]);

  const addDeed = ({ name, weight }: TFormInputs) => {
    setDeedsItems(prevState => {
      return [
        ...prevState,
        {
          id: (prevState.length + 1).toString(),
          name,
          weight,
        },
      ];
    });
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateRows: '114px 1fr' }}>
      <Box sx={{ gridRow: '1 / 2' }}>
        <DeedToolbarComponent score={score} addDeed={addDeed} />
      </Box>
      <Box sx={{ gridRow: '2 / 3' }}>
        <DeedListComponent goodDeeds={goodDeeds} sins={sins} />
      </Box>
    </Box>
  );
}

export default DeedList;
