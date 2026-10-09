import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Site, type ContactPerson, type Service } from './site'

type ContactPersonDocument = Omit<ContactPerson, 'imageUrl'> & {
  image?: Parameters<typeof urlFor>[0]
}

const contactsQuery = groq`*[_type == "yhteyshenkilo"] | order(jarjestys asc)`
const servicesQuery = groq`*[_type == "palvelu"] | order(jarjestys asc)`

async function getSiteData(): Promise<{ people: ContactPerson[]; services: Service[] }> {
  const [people, services] = await Promise.all([
    client.fetch<ContactPersonDocument[]>(contactsQuery, {}, { next: { revalidate: 60 } }),
    client.fetch<Service[]>(servicesQuery, {}, { next: { revalidate: 60 } }),
  ])

  return {
    people: people.map(({ image, ...person }) => ({
      ...person,
      imageUrl: image ? urlFor(image).width(800).height(800).fit('crop').url() : undefined,
    })),
    services,
  }
}

export default async function Page() {
  return <Site lang="fi" {...await getSiteData()} />
}
