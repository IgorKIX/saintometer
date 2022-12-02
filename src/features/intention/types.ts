import { Database } from '../../utils/database.types';

export interface IEventFormInputs {
  name: string;
  score: number;
}

export type TNewEvent = Database['public']['Tables']['events']['Insert'];
