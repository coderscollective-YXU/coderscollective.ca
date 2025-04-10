import type { ListItemBuilder, StructureResolver } from "sanity/structure";
import { siteSettings } from "./schemaTypes/siteSettings";
import BookIcon from "@/app/components/icons/BookIcon";
import { homepageSchema } from "./schemaTypes/pages/homepage";
import { aboutPageSchema } from "./schemaTypes/pages/aboutPage";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  const siteSettingsListItem = S.listItem()
    .title(siteSettings.title || "")
    .icon(siteSettings.icon)
    .child(
      S.editor()
        .id(siteSettings.name)
        .schemaType(siteSettings.name)
        .documentId(siteSettings.name)
    );

  const homepageListItem = S.listItem()
    .title(homepageSchema.title || "")
    .icon(homepageSchema.icon)
    .child(
      S.editor()
        .id(homepageSchema.name)
        .schemaType(homepageSchema.name)
        .documentId(homepageSchema.name)
    );

  const aboutPageListItem = S.listItem()
    .title(aboutPageSchema.title || "")
    .icon(aboutPageSchema.icon)
    .child(
      S.editor()
        .id(aboutPageSchema.name)
        .schemaType(aboutPageSchema.name)
        .documentId(aboutPageSchema.name)
    );

  const pages = S.listItem()
    .title("Pages")
    .icon(BookIcon)
    .child(S.list().title("Pages").items([homepageListItem, aboutPageListItem]));

  const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const listItemId = listItem.getId() as "siteSettings" | "homepage";

    if (listItemId) {
      return ![
        siteSettings.name,
        homepageSchema.name,
        aboutPageSchema.name,
      ].includes(listItemId);
    } else {
      return true;
    }
  };

  return S.list()
    .title("Content")
    .items([
      siteSettingsListItem,
      S.divider(),
      pages,
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
};
