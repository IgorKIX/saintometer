export interface IIntention {
  id?: number;
  name: string;
  description: string | null;
  score?: number;
}

export interface IIntentionFormInputs {
  name: string;
  description: string;
}

export interface IEvent {
  id?: number;
  name: string;
  score: number;
}
