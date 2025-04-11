import { FlipWords } from "@/components/ui/flip-words";
import Logo from "@/components/ui/logo";

export default function Success() {
  const words = ["Learn", "Teach", "Support", "Connect"];

  return (
    <div className='min-h-screen bg-gray-900 justify-center items-center flex flex-col'>
      <Logo />
      <div className='flex justify-center items-center px-4'>
        <div className='text-2xl md:text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-400'>
          Get ready to
          <FlipWords words={words} /> <br />
          Your subscription is confirmed.
        </div>
      </div>
    </div>
  );
}
