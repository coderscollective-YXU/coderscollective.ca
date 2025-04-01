import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, sanityAPIWriteToken } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token: sanityAPIWriteToken
})
