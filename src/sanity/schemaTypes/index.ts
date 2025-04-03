import { SchemaTypeDefinition } from "sanity";
import { newsletterSignupType } from "./subscribers";
import { siteSettings } from "./siteSettings";
import { homepageSchema } from "./pages/homepage";
import { linkSchema } from "./objects/linkSchema";



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    newsletterSignupType,
    siteSettings,
    // pages
    homepageSchema,


    // objects
    linkSchema
  ],
}
