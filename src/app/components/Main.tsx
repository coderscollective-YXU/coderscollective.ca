import { BackgroundBeams } from "@/components/ui/background-beams";
import { ReactNode } from "react"

const Main = ({ children }: {
  children: ReactNode
}) => {
  return (
    <main className="min-h-screen w-full bg-transparent relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      {children}
    </main>

  );
}

export default Main;