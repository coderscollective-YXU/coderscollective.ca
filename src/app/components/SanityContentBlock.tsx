import { PortableText } from '@portabletext/react'
import { TeamMember } from '../../../sanity.types';
const SanityContentBlock = ({ blocks }: {
  blocks: TeamMember["bio"];
}) => {
  return (
    <PortableText
      value={blocks}
    // components={/* optional object of custom components to use */}
    />
  );
}

export default SanityContentBlock;


