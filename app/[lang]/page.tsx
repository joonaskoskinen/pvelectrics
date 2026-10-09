import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Site, type ContactPerson, type Service } from '../site'

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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const fi = lang === 'fi'
  return { title: fi ? 'PV Electrics Oy | Teollisuuden sähkö ja automaatio' : 'PV Electrics Oy | Industrial electrical and automation', description: fi ? 'Teollisuuden sähkö- ja automaatiourakoinnin sekä kunnossapidon kumppani Virolahdelta.' : 'Your partner in industrial electrical and automation contracting and maintenance from Virolahti.', alternates: { canonical: `https://pvelectrics.fi/${lang}`, languages: { fi: 'https://pvelectrics.fi/fi', en: 'https://pvelectrics.fi/en', 'x-default': 'https://pvelectrics.fi/fi' } }, openGraph: { title: fi ? 'PV Electrics Oy' : 'PV Electrics Oy', description: fi ? 'Teollisuuden sähkö- ja automaatiourakointi sekä kunnossapito.' : 'Industrial electrical and automation contracting and maintenance.', url: `https://pvelectrics.fi/${lang}`, locale: fi ? 'fi_FI' : 'en_GB', type: 'website' } }
}

export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) { const { lang } = await params; if (lang !== 'fi' && lang !== 'en') notFound(); return <Site lang={lang} {...await getSiteData()} /> }
