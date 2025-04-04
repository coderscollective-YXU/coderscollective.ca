import { SchemaTypeDefinition } from "sanity";
import { newsletterSignupType } from "./subscribers";
import { siteSettings } from "./siteSettings";
import { homepageSchema } from "./pages/homepage";
import { linkSchema } from "./objects/linkSchema";
import { eventSchema } from "./documents/eventSchema";



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    
    // pages
    homepageSchema,
    
    // documents
    eventSchema,
    newsletterSignupType,


    // objects
    linkSchema
  ],
}
