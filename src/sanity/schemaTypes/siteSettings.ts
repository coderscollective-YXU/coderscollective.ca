import EmailIcon from "@/app/icons/EmailIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import GithubIcon from "@/app/icons/GithubIcon";
import InstaIcon from "@/app/icons/InstaIcon";
import LinkedInIcon from "@/app/icons/LinkedInIcon";
import LinkIcon from "@/app/icons/LinkIcon";
import SettingsIcon from "@/app/icons/settings";
import TwitterIcon from "@/app/icons/TwitterIcon";
import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: SettingsIcon,
  fields: [
    defineField({
      name: "siteTitle",
      title: "SEO Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "SEO Site Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "array",
      name: "socialLinks",
      title: "Social Links",
      of: [
        defineArrayMember({
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "linkType",
              title: "Link Type",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "Facebook", value: "facebook" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "GitHub", value: "github" },
                  { title: "Link", value: "link" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Email", value: "email" },
                ],
              },
              validation: (Rule) => Rule.required(),
              
            }),
          ],
          preview: {
            select: {
              title: 'title',
              linkType: 'linkType',
              url: 'url',
            },
            prepare(selection) {
              const { title, linkType, url } = selection;
    
              const iconMap = {
                instagram: InstaIcon,
                facebook: FacebookIcon,
                linkedin: LinkedInIcon,
                github: GithubIcon,
                link: LinkIcon,
                twitter: TwitterIcon,
                email: EmailIcon,
              };
    
              const icon = iconMap[linkType as keyof typeof iconMap];
    
              return {
                title: title,
                subtitle: `${linkType} ${url}`,
                media: icon
              };
            },
          }
    
        }),
      ],
    }),
  ],
});
