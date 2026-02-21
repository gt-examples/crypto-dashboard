import { T, Currency, Num, DateTime, Var, Branch } from 'gt-next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Disclaimer from '@/components/Disclaimer';

const marketData = [
  { symbol: 'BTC', name: 'Bitcoin', price: 97243.51, change: 2.34, marketCap: 1928000000000 },
  { symbol: 'ETH', name: 'Ethereum', price: 2718.93, change: -1.12, marketCap: 327000000000 },
  { symbol: 'SOL', name: 'Solana', price: 171.45, change: 5.67, marketCap: 83000000000 },
  { symbol: 'BNB', name: 'BNB', price: 648.20, change: 0.89, marketCap: 94000000000 },
  { symbol: 'XRP', name: 'XRP', price: 2.41, change: -0.45, marketCap: 138000000000 },
  { symbol: 'ADA', name: 'Cardano', price: 0.74, change: 3.21, marketCap: 26000000000 },
];

const portfolio = [
  { symbol: 'BTC', name: 'Bitcoin', amount: 0.4521, price: 97243.51, value: 43944.26 },
  { symbol: 'ETH', name: 'Ethereum', amount: 12.35, price: 2718.93, value: 33578.79 },
  { symbol: 'SOL', name: 'Solana', amount: 85.0, price: 171.45, value: 14573.25 },
  { symbol: 'XRP', name: 'XRP', amount: 5000, price: 2.41, value: 12050.0 },
];

const transactions = [
  { type: 'buy' as const, asset: 'Bitcoin', amount: 0.05, value: 4862.18, date: new Date('2026-02-20T14:32:00') },
  { type: 'sell' as const, asset: 'Ethereum', amount: 2.0, value: 5437.86, date: new Date('2026-02-19T09:15:00') },
  { type: 'buy' as const, asset: 'Solana', amount: 25.0, value: 4286.25, date: new Date('2026-02-18T16:45:00') },
  { type: 'buy' as const, asset: 'XRP', amount: 1000, value: 2410.0, date: new Date('2026-02-17T11:20:00') },
  { type: 'sell' as const, asset: 'Bitcoin', amount: 0.1, value: 9724.35, date: new Date('2026-02-16T08:00:00') },
];

const totalValue = portfolio.reduce((sum, p) => sum + p.value, 0);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Disclaimer />
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Portfolio Summary */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
          <T>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Portfolio Value</h2>
            <p className="text-4xl font-bold">
              <Currency currency="USD">{totalValue}</Currency>
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              +<Num>{3.42}</Num>% (24h)
            </p>
          </T>
        </section>

        {/* Market Overview */}
        <section>
          <T>
            <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          </T>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
                    <T>
                      <th className="px-6 py-3 font-medium">Asset</th>
                      <th className="px-6 py-3 font-medium text-right">Price</th>
                      <th className="px-6 py-3 font-medium text-right">24h Change</th>
                      <th className="px-6 py-3 font-medium text-right hidden sm:table-cell">Market Cap</th>
                    </T>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((coin) => (
                    <tr key={coin.symbol} className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                            {coin.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <p className="font-medium">{coin.name}</p>
                            <p className="text-xs text-gray-500">{coin.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-medium">
                        <Currency currency="USD">{coin.price}</Currency>
                      </td>
                      <td className={`px-6 py-4 text-right font-medium ${coin.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {coin.change >= 0 ? '+' : ''}<Num options={{ maximumFractionDigits: 2 }}>{coin.change}</Num>%
                      </td>
                      <td className="px-6 py-4 text-right text-gray-500 hidden sm:table-cell">
                        <Currency currency="USD" options={{ notation: 'compact', maximumFractionDigits: 1 }}>{coin.marketCap}</Currency>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Holdings */}
        <section>
          <T>
            <h2 className="text-xl font-semibold mb-4">Your Holdings</h2>
          </T>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.map((holding) => (
              <div key={holding.symbol} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                      {holding.symbol.slice(0, 2)}
                    </div>
                    <span className="font-medium">{holding.name}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold">
                  <Currency currency="USD">{holding.value}</Currency>
                </p>
                <T>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <Var name="amount">{holding.amount.toFixed(4)}</Var>{' '}
                    <Var name="symbol">{holding.symbol}</Var>
                  </p>
                </T>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <T>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          </T>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800/50">
            {transactions.map((tx, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${tx.type === 'buy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {tx.type === 'buy' ? 'B' : 'S'}
                  </div>
                  <div>
                    <T>
                      <p className="font-medium">
                        <Branch branch={tx.type} buy={<>Bought</>} sell={<>Sold</>} />{' '}
                        <Var name="asset">{tx.asset}</Var>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <Var name="amount">{tx.amount}</Var>{' '}
                        <Var name="assetName">{tx.asset}</Var>
                      </p>
                    </T>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    <Currency currency="USD">{tx.value}</Currency>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <DateTime>{tx.date}</DateTime>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
