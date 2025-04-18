import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Sponsors = () => {
  return (
    <section className="my-20 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Sponsors</h2>
      <div className="bg-neutral-900/50 p-8 rounded-lg text-center max-w-3xl mx-auto">
        <p className="text-lg mb-6 text-neutral-300">
          Be a part of something impactful in London, Ontario&apos;s tech community. Your logo can be here! Contact us below to explore sponsorship.
        </p>
        <Link href="/signup" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
          Contact us <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default Sponsors; 