import { SchemaTypeDefinition } from "sanity";
import { newsletterSignupType } from "./subscribers";
import { siteSettings } from "./siteSettings";
import { homepageSchema } from "./pages/homepage";
import { linkSchema } from "./objects/linkSchema";
import { eventSchema } from "./documents/eventSchema";
import { teamMemberSchema } from "./documents/teamMemberSchema";
import { aboutPageSchema } from "./pages/aboutPage";
import { workshopTypeSchema } from "./documents/workshopTypeSchema";
import { testimonialSchema } from "./documents/testimonialSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,

    // pages
    homepageSchema,
    aboutPageSchema,

    // documents
    eventSchema,
    newsletterSignupType,
    teamMemberSchema,
    workshopTypeSchema,
    testimonialSchema,

    // objects
    linkSchema,
  ],
};
