# Email infrastructure guide (Resend + React Email)

This project uses Resend to send transactional emails and React Email for templates. Use this doc to set up the same approach in another project.

## Stack overview
- Provider: Resend (API-based email delivery)
- Templates: React Email (`@react-email/components`)
- Sending code: Server-side only (API route, server action, or backend handler)

## 1) Create the Resend account + verify domain
1. Create a Resend account.
2. Add and verify a sending domain in Resend.
3. Add the DNS records Resend provides (SPF/DKIM).
4. Decide on a sender address (example: `info@updates.example.com`).

## 2) Install dependencies
```bash
pnpm add resend @react-email/components
```
(Use `npm` or `yarn` if the project does not use `pnpm`.)

## 3) Add environment variables
Add to the project’s env file (example names below):
```
RESEND_API_KEY=your_api_key_here
```
Notes:
- Keep this server-only. Never expose the key to the client.
- If you deploy to Vercel/Netlify/etc., add the env var there too.

## 4) Create a React Email template
Example template structure:
```tsx
// src/components/email/welcome-email.tsx
import { Html, Body, Container, Heading, Text } from "@react-email/components";

export default function WelcomeEmail() {
  return (
    <Html>
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container>
          <Heading>Welcome!</Heading>
          <Text>Thanks for signing up.</Text>
        </Container>
      </Body>
    </Html>
  );
}
```

## 5) Send the email from server code
Server-side only. Example (Next.js server action / API route pattern):
```ts
import { Resend } from "resend";
import WelcomeEmail from "@/components/email/welcome-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  const { error } = await resend.emails.send({
    from: "Your Brand <info@updates.example.com>",
    to: [email],
    replyTo: "info@example.com",
    subject: "Welcome to Example",
    react: WelcomeEmail(),
  });

  if (error) {
    throw new Error("Error sending email");
  }
}
```

## 6) Wire it into your signup flow
Typical flow:
1. Validate input (server-side).
2. Save the subscriber (DB/CMS).
3. Send the email.
4. Handle errors cleanly and return a friendly response.

## 7) Local testing
- Use your own email address as the recipient for quick testing.
- If you need to test in a preview-only mode, skip sending and just render the template to HTML.

## Common pitfalls
- Missing DNS records: emails won’t deliver or will land in spam.
- Using client-side code: Resend API key must stay server-side.
- Invalid `from` address: must match the verified domain.

## What to reuse from this repo
- Template style: `src/components/email/welcome-email.tsx`
- Sending logic: `src/app/(pages)/signup/actions/signup.ts` (Resend usage pattern)
