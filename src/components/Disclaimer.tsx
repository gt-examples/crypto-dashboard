import { T } from 'gt-next';

export default function Disclaimer() {
  return (
    <div className="bg-blue-600 text-white text-center text-sm py-2 px-4">
      <T>
        This is an example app built with{' '}
        <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="underline font-medium">
          General Translation
        </a>
        . All data shown is fictional.
      </T>
    </div>
  );
}
