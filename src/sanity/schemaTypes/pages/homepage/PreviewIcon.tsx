export const PreviewIcon = ({ icon }: {
  icon: string;
}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: icon }} />
  )
}