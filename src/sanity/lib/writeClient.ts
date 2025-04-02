import { createClient } from "next-sanity";
import { dataset, apiVersion, projectId, sanityAPIWriteToken } from "../env";

export const sanityWriteClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  token: sanityAPIWriteToken,
});
