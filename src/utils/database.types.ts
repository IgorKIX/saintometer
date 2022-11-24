export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: number;
          intention_id: number;
          name: string;
          score: number;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          intention_id?: number;
          name: string;
          score?: number;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          intention_id?: number;
          name?: string;
          score?: number;
          created_at?: string | null;
        };
      };
      intentions: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          score: number;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          name: string;
          description?: string | null;
          score?: number;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string | null;
          score?: number;
          created_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export enum DATABASE_TABLES_NAMES {
  INTENTIONS = 'intentions',
  EVENTS = 'events',
}
