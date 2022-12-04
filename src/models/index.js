// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Database } = initSchema(schema);

export {
  Database
};