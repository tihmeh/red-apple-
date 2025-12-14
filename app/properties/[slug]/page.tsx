import properties from '@/data/properties.json';

export default function PropertyPage({ params }) {
  const property = properties.find(p => p.slug === params.slug);

  if (!property) return <h1>Property not found</h1>;

  return (
    <div>
      <h1>{property.name}</h1>

      <img src={property.image} alt={property.name} style={{maxWidth:500}} />

      <p><strong>Address:</strong> {property.address}</p>
      <p><strong>State:</strong> {property.state}</p>
      <p><strong>Units:</strong> {property.units ?? 'N/A'}</p>
      <p><strong>Year Built:</strong> {property.year}</p>
      <p><strong>Ownership LLC:</strong> {property.llc}</p>
      <p><strong>Type:</strong> {property.type}</p>

      <br />
      <a href="/properties">← Back to portfolio</a>
    </div>
  );
}
