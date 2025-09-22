import { JsonLdSchema } from './types';

interface JsonLdProps {
  data: JsonLdSchema | JsonLdSchema[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const jsonLdData = Array.isArray(data) ? data : [data];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": jsonLdData
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2)
      }}
    />
  );
}