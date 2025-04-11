import { FOOTER_QUERYResult } from "../../../sanity.types";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import EmailIcon from "./icons/EmailIcon";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import InstaIcon from "./icons/InstaIcon";
import LinkIcon from "./icons/LinkIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TwitterIcon from "./icons/TwitterIcon";

const SocialIcons = {
  "email": <EmailIcon />,
  "facebook": <FacebookIcon />,
  "github": <GithubIcon />,
  "instagram": <InstaIcon />,
  "link": <LinkIcon />,
  "linkedin": <LinkedInIcon />,
  "twitter": <TwitterIcon />,
};

const Footer = ({ content }: {
  content: FOOTER_QUERYResult;
}) => {
  if (!content || !content.footer) return;
  const { footer } = content;
  return (
    <footer className="border-t border-border py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-2">
            <Logo />
            <p className="text-muted-foreground mb-6 max-w-md">
              {footer.footerMessage}
            </p>
            {content.socialLinks && (
              <ul className="flex space-x-4">
                {content.socialLinks.map(link => (
                  <li key={link.title}>
                    <Link href={link.linkType === "email" ? `mailto:${link.url}` : link.url}>
                      {SocialIcons[link.linkType]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {footer.resources && footer.resources.length > 0 && (
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                {footer.resources.map(resource => (
                  <li key={resource._key}>
                    <Link href={resource.url} className="text-muted-foreground hover:text-primary transition-colors">
                      {resource.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {footer.company && footer.company.length > 0 && (
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {footer.company.map(link => (
                  <li key={link._key}>
                    <Link href={link.url} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="md:col-span-3">
            <h3 className="font-bold text-lg mb-4">{footer.subscribe.title}</h3>
            <p className="text-muted-foreground mb-4">
              {footer.subscribe.subtitle}
            </p>
            <div className="flex">
              <Link href={"/signup"}>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
                  {footer.subscribe.linkText}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Coders Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;