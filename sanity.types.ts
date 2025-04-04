/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type NewletterSignup = {
  _id: string;
  _type: "newletterSignup";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: string;
};

export type Event = {
  _id: string;
  _type: "event";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  date: string;
  hours: string;
  link: string;
  spotsAvailable: number;
  location: string;
  eventType: "networking" | "workshop";
};

export type Homepage = {
  _id: string;
  _type: "homepage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: {
    title: string;
    description: string;
  };
  hero?: {
    title: string;
    subtitle: string;
    cta1?: LinkObject;
    cta2?: LinkObject;
  };
  mission?: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      subtitle: string;
      icon: string;
      _type: "card";
      _key: string;
    }>;
  };
  about?: {
    title: string;
    subtitle: string;
    whatSetsUsApart: {
      title: string;
      items: Array<{
        title: string;
        subtitle: string;
        icon: string;
        _type: "item";
        _key: string;
      }>;
    };
    ourCommitment?: {
      title: string;
      subtitle: string;
      quote?: {
        text: string;
        author: string;
      };
    };
  };
  ourPrograms?: {
    title: string;
    subtitle: string;
    programs?: Array<{
      icon: string;
      title: string;
      subtitle: string;
      items?: Array<string>;
      _type: "program";
      _key: string;
    }>;
    communityEvents?: {
      icons?: Array<{
        icon: string;
        _type: "icon";
        _key: string;
      }>;
      title: string;
      subtitle: string;
      eventItems?: Array<string>;
      whyCommunityMatters: {
        title: string;
        subtitle: string;
        buttonText: string;
      };
    };
  };
  events?: {
    title: string;
    subtitle: string;
    featuredEvents?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "event";
    }>;
  };
  getInvolved?: {
    title: string;
    subtitle: string;
    cards?: Array<{
      icon: string;
      title: string;
      subtitle: string;
      cta?: LinkObject;
      _type: "card";
      _key: string;
    }>;
    startCoding?: {
      title: string;
      subtitle: string;
      cta1?: LinkObject;
      cta2?: LinkObject;
    };
  };
};

export type LinkObject = {
  _type: "linkObject";
  type: "internal" | "external";
  text: string;
  url: string;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteTitle: string;
  siteDescription: string;
  socialLinks?: Array<{
    title: string;
    url: string;
    linkType: "instagram" | "facebook" | "linkedin" | "github" | "link" | "twitter" | "email";
    _type: "link";
    _key: string;
  }>;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | Slug | SanityAssetSourceData | NewletterSignup | Event | Homepage | LinkObject | SiteSettings;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/queries/existingSubscriber.ts
// Variable: EXISTING_SUBSCRIBER_QUERY
// Query: *[_type == "newletterSignup" && email == $email] {      _id,      email    }
export type EXISTING_SUBSCRIBER_QUERYResult = Array<{
  _id: string;
  email: string | null;
}>;

// Source: ./src/sanity/queries/homepage.ts
// Variable: HOMEPAGE_QUERY
// Query: *[_type == "homepage"] [0] {    ...,    "events": events {      title,      subtitle,      "featuredEvents": featuredEvents  [] -> {        ...      }    }   }
export type HOMEPAGE_QUERYResult = {
  _id: string;
  _type: "homepage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: {
    title: string;
    description: string;
  };
  hero?: {
    title: string;
    subtitle: string;
    cta1?: LinkObject;
    cta2?: LinkObject;
  };
  mission?: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      subtitle: string;
      icon: string;
      _type: "card";
      _key: string;
    }>;
  };
  about?: {
    title: string;
    subtitle: string;
    whatSetsUsApart: {
      title: string;
      items: Array<{
        title: string;
        subtitle: string;
        icon: string;
        _type: "item";
        _key: string;
      }>;
    };
    ourCommitment?: {
      title: string;
      subtitle: string;
      quote?: {
        text: string;
        author: string;
      };
    };
  };
  ourPrograms?: {
    title: string;
    subtitle: string;
    programs?: Array<{
      icon: string;
      title: string;
      subtitle: string;
      items?: Array<string>;
      _type: "program";
      _key: string;
    }>;
    communityEvents?: {
      icons?: Array<{
        icon: string;
        _type: "icon";
        _key: string;
      }>;
      title: string;
      subtitle: string;
      eventItems?: Array<string>;
      whyCommunityMatters: {
        title: string;
        subtitle: string;
        buttonText: string;
      };
    };
  };
  events: {
    title: string;
    subtitle: string;
    featuredEvents: Array<{
      _id: string;
      _type: "event";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name: string;
      date: string;
      hours: string;
      link: string;
      spotsAvailable: number;
      location: string;
      eventType: "networking" | "workshop";
    }> | null;
  } | null;
  getInvolved?: {
    title: string;
    subtitle: string;
    cards?: Array<{
      icon: string;
      title: string;
      subtitle: string;
      cta?: LinkObject;
      _type: "card";
      _key: string;
    }>;
    startCoding?: {
      title: string;
      subtitle: string;
      cta1?: LinkObject;
      cta2?: LinkObject;
    };
  };
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n    *[_type == \"newletterSignup\" && email == $email] {\n      _id,\n      email\n    }\n  ": EXISTING_SUBSCRIBER_QUERYResult;
    "\n  *[_type == \"homepage\"] [0] {\n    ...,\n    \"events\": events {\n      title,\n      subtitle,\n      \"featuredEvents\": featuredEvents  [] -> {\n        ...\n      }\n    } \n  }\n  ": HOMEPAGE_QUERYResult;
  }
}
