import properties from '@/data/properties.json';

export default function Home() {
  return (
    <div>
      <h1>Red Apple Real Estate Portfolio</h1>
      <p>An independent investor-style overview of Red Apple Group properties.</p>

      <h2>Featured Properties</h2>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gap:20
      }}>
        {properties.slice(0,3).map((p) => (
          <a key={p.slug} href={`/properties/${p.slug}`} style={{border:'1px solid #ccc', padding:10}}>
            <img src={p.image} alt={p.name}/>
            <h3>{p.name}</h3>
            <p>{p.address}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
