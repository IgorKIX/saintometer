import { useQuery } from 'react-query';

import { DATABASE_ALL, DATABASE_TABLES_NAMES } from '../../database.types';
import supabase from '../../supabase';

const fetchIntentions = async () => {
  const { data, error } = await supabase
    .from(DATABASE_TABLES_NAMES.INTENTIONS)
    .select('id,name,description,score');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useGetIntentions() {
  return useQuery([DATABASE_TABLES_NAMES.INTENTIONS, DATABASE_ALL], () =>
    fetchIntentions(),
  );
}
