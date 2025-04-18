import { BackgroundBeams } from "@/components/ui/background-beams";
import { ReactNode } from "react"

const Main = async ({ children }: {
  children: ReactNode
}) => {
  return (
    <main className="min-h-screen w-full bg-transparent relative flex flex-col items-center justify-center antialiased">
      <div className="w-full h-screen fixed top-0 -z-10">
        <BackgroundBeams />
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </main>

  );
}

export default Main;