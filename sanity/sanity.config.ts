import { defineConfig } from 'sanity';
import { schemaTypes } from './schema';
export default defineConfig({
  name: 'default',
  title: 'Express Energy CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  schema: { types: schemaTypes }
});
