import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDatabase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Database, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDatabase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Database, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Database = LazyLoading extends LazyLoadingDisabled ? EagerDatabase : LazyDatabase

export declare const Database: (new (init: ModelInit<Database>) => Database) & {
  copyOf(source: Database, mutator: (draft: MutableModel<Database>) => MutableModel<Database> | void): Database;
}