import Link from 'next/link';

export default function Custom404() {
  return (
    <main style={{ padding: '0 15px' }}>
      <h1><pre>404 — not found</pre></h1>
      <Link href="/">
        <a style={{ color: 'lightskyblue' }}>Return to main page</a>
      </Link>
    </main>
  );
}
