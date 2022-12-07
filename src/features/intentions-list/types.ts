import { Database } from '../../db/database.types';

export type TIntention = Database['public']['Tables']['intentions']['Row'];

export type TNewIntention =
  Database['public']['Tables']['intentions']['Insert'];
export type TUpdateIntention =
  Database['public']['Tables']['intentions']['Update'];

export interface IIntentionFormInputs {
  name: string;
  description: string;
}
