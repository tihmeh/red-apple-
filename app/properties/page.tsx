import properties from '@/data/properties.json';

export default function PropertiesPage() {
  return (
    <div>
      <h1>All Properties</h1>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gap:20
      }}>
        {properties.map((p) => (
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
