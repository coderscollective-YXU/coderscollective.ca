import React from "react";
import Main from "@/app/components/Main";
import { Card, CardContent } from "@/components/ui/card";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Coders Collective",
  description:
    "Coders Collective Privacy Policy - How we protect your personal information",
};

const PrivacyPolicyPage = async () => {
  // Read the markdown file
  const filePath = path.join(process.cwd(), "privacy-policy.md");
  const markdownContent = fs.readFileSync(filePath, "utf8");

  return (
    <Main>
      <section className='mt-16 py-20 relative overflow-hidden'>
        <div className='absolute inset-0 z-0 opacity-20'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-multiply' />
          <div className='h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-background to-background'></div>
        </div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center max-w-3xl mx-auto'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-8'>
              Privacy Policy
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground'>
              How we protect your personal information
            </p>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-24'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <Card className='glass-card backdrop-blur-lg border-white/10 overflow-hidden'>
            <CardContent className='prose prose-invert max-w-none p-6 md:p-8'>
              <div className='markdown-content'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ ...props }) => <p className='mb-6' {...props} />,
                    ul: ({ ...props }) => (
                      <ul className='list-disc pl-8 mb-6' {...props} />
                    ),
                    li: ({ ...props }) => <li className='mb-2' {...props} />,
                    h1: ({ ...props }) => (
                      <h1
                        className='text-4xl font-bold mt-10 mb-6'
                        {...props}
                      />
                    ),
                    h2: ({ ...props }) => (
                      <h2
                        className='text-3xl font-bold mt-10 mb-6'
                        {...props}
                      />
                    ),
                    h3: ({ ...props }) => (
                      <h3 className='text-2xl font-bold mt-8 mb-4' {...props} />
                    ),
                    a: ({ ...props }) => (
                      <a
                        className='text-primary hover:underline'
                        target='_blank'
                        rel='noopener noreferrer'
                        {...props}
                      />
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
              <div className='mt-12'>
                <h2 className='text-3xl font-bold mb-6'>Related Resources</h2>
                <ul className='space-y-4'>
                  <li>
                    <Link
                      href='/code-of-conduct'
                      className='text-primary hover:underline flex items-center'
                    >
                      <span className='mr-2'>•</span>
                      <span>Code of Conduct</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about'
                      className='text-primary hover:underline flex items-center'
                    >
                      <span className='mr-2'>•</span>
                      <span>About Coders Collective</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Main>
  );
};

export default PrivacyPolicyPage; 