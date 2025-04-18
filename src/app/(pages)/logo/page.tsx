import React from 'react';
import Main from '../../components/Main';
import LogoDownloader from './LogoDownloader';

export default function LogoPage() {
  return (
    <Main>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Coders Collective Logo</h1>
        <p className="text-lg text-gray-400 mb-12 text-center">
          Download our logo in various formats for your use.
        </p>

        <LogoDownloader />

        <div className="mt-16 p-6 border border-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Please maintain adequate spacing around the logo when using it</li>
            <li>Do not distort, rotate, or alter the logo&apos;s proportions</li>
            <li>Do not change the logo&apos;s colors</li>
            <li>When placing the logo on colored backgrounds, choose the variant with the best contrast</li>
          </ul>
        </div>
      </div>
    </Main>
  );
} 