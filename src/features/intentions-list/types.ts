import { Database } from '../../utils/database.types';

export type TIntention = Database['public']['Tables']['intentions']['Row'];

export type TNewIntention =
  Database['public']['Tables']['intentions']['Insert'];

export interface IIntentionFormInputs {
  name: string;
  description: string;
}
