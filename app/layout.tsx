import './globals.css';

export const metadata = {
  title: 'Red Apple Real Estate Portfolio',
  description: 'An investor-style presentation of Red Apple Group properties.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{padding:'20px', borderBottom:'1px solid #ddd'}}>
          <a href="/" style={{marginRight:20}}>Home</a>
          <a href="/properties">Portfolio</a>
        </nav>
        <main style={{padding:'20px'}}>
          {children}
        </main>
      </body>
    </html>
  );
}
