import { T } from 'gt-next';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <T>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p>Built with{' '}
              <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 dark:hover:text-white">General Translation</a>
              {' '}and{' '}
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 dark:hover:text-white">Next.js</a>
            </p>
            <div className="flex gap-4">
              <a href="https://generaltranslation.com/docs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">Docs</a>
              <a href="https://github.com/gt-examples/crypto-dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">Source</a>
            </div>
          </div>
        </T>
      </div>
    </footer>
  );
}
