import type { ListItemBuilder, StructureResolver } from "sanity/structure";
import { siteSettings } from "./schemaTypes/siteSettings";
import BookIcon from "@/app/icons/BookIcon";
import { homepageSchema } from "./schemaTypes/pages/homepage";

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

  const pages = S.listItem()
    .title("Pages")
    .icon(BookIcon)
    .child(S.list().title("Pages").items([homepageListItem]));

  const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const listItemId = listItem.getId() as "siteSettings" | "homepage";

    if (listItemId) {
      return ![siteSettings.name, homepageSchema.name].includes(listItemId);
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
