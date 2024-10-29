import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text
} from '@react-email/components';

const WelcomeEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Join London&apos;s growing tech community for meetups, learning sessions, and more!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Get Ready for Something Amazing!</Heading>
          <Text style={text}>
            Thanks for joining the Coders Collective waitlist! We&apos;re excited to have you as part of our growing tech community in London.
          </Text>

          <Text style={text}>You&apos;re now on the list to hear about our upcoming:</Text>
          <ul>
            <li style={listItem}>Community meetups</li>
            <li style={listItem}>Peer learning sessions</li>
            <li style={listItem}>Tech talks and networking events</li>
          </ul>

          <Text style={text}>
            We&apos;ll reach out soon with details about our next gathering. 
{/*             
            Until then, follow us on social media to stay connected with the community. */}
          </Text>

          {/* <Section style={btnContainer}>
            <Button style={button} href="https://twitter.com/coderscollective">
              Follow us on Twitter
            </Button>
          </Section> */}

          <Text style={text}>
            Have questions? Just reply to this email - we&apos;d love to hear from you!
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            Happy coding,<br />
            The Coders Collective Team
          </Text>

          <Text style={footnote}>
            P.S. Know someone else who might be interested? Feel free to spread the word about our community!
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.4',
  padding: '0 48px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.6',
  padding: '0 48px',
};

const listItem = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.6',
};

// const btnContainer = {
//   padding: '24px 48px',
// };

// const button = {
//   backgroundColor: '#5469d4',
//   borderRadius: '4px',
//   color: '#fff',
//   fontSize: '16px',
//   textDecoration: 'none',
//   textAlign: 'center' as const,
//   display: 'block',
//   padding: '12px',
// };

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 48px',
};

const footer = {
  color: '#666',
  fontSize: '16px',
  lineHeight: '1.6',
  padding: '0 48px',
};

const footnote = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '1.6',
  padding: '0 48px',
};

export default WelcomeEmail;