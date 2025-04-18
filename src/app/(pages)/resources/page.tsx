import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Recommended Tools</h2>
            <p className="mb-4">Tools and software we recommend for productive coding.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-medium">Code Editors</h3>
                <p className="text-sm text-muted-foreground">VS Code, Sublime Text, IntelliJ IDEA</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-medium">Design Tools</h3>
                <p className="text-sm text-muted-foreground">Figma, Adobe XD, Sketch</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-medium">Version Control</h3>
                <p className="text-sm text-muted-foreground">Git, GitHub, GitLab</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-medium">Deployment</h3>
                <p className="text-sm text-muted-foreground">Vercel, Netlify, AWS</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4">Want to contribute to our resources?</p>
          <Button asChild>
            <Link href="/signup">Get Involved</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 