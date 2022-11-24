export interface IIntention {
  id?: number;
  name: string;
  description: string;
  score?: number;
}

export interface IIntentionFormInputs {
  name: string;
  description: string;
}
