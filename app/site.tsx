'use client'

import NextImage from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, ChevronRight, Menu, X, Settings, Wrench, ShieldCheck, Cog } from 'lucide-react'
import { contact, placeholders, tel, mailto } from '@/lib/contact'

const people = contact.team

const content = {
  fi: {
    nav: ['Palvelut', 'Meistä', 'Yhteystiedot'],
    heroLabel: 'PV ELECTRICS OY · VIROLAHTI',
    heroTitle: 'Sähkö ja automaatio, joka pitää tuotannon liikkeessä.',
    heroText: 'Teollisuuden sähkö- ja automaatiourakoinnin sekä kunnossapidon kumppani projekteihin, saneerauskohteisiin ja uudisrakentamiseen.',
    quote: 'Pyydä tarjous', servicesCta: 'Tutustu palveluihin',
    servicesEyebrow: 'Mitä teemme', servicesTitle: 'Tekniikkaa, johon voit luottaa.',
    servicesText: 'Monipuoliset ratkaisut teollisuuden sähkö- ja automaatiotarpeisiin – suunnittelusta toteutukseen ja kunnossapitoon.',
    projectsEyebrow: 'Valikoituja toteutuksia', projectsTitle: 'Työ näkyy siellä, missä tuotanto toimii.', projectsText: 'Teemme sähköstä ja automaatiosta näkymättömän varmaa. Tutustu muutamaan esimerkkiin kohteista, joissa olemme olleet mukana.',
    projects: [['Kouvola', 'Tuotantolinjan sähköistys', 'Uuden tuotantolinjan sähkö- ja ohjausjärjestelmät suunnittelusta käyttöönottoon.', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'], ['Kotka', 'Teollisuushallin automaatio', 'PLC-ohjelmointi ja ohjauskeskukset osaksi toimivaa kokonaisuutta.', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85'], ['Hamina', 'Kunnossapidon kumppanuus', 'Ennakoiva kunnossapito ja nopea vikapalvelu tuotannon jatkuvuuteen.', placeholders.hamina]],
    services: [
      ['Sähköurakointi', 'Sähköasennukset projekteihin, saneerauskohteisiin ja uudisrakentamiseen.'],
      ['Automaatiourakointi', 'PLC-ohjelmointi, ohjauskeskukset ja teollisuuden automaatioratkaisut osaksi toimivaa kokonaisuutta.'],
      ['Sähkökunnossapito', 'Ennakoivaa kunnossapitoa, vianrajausta ja korjauksia tuotannon jatkuvuuden tueksi.'],
      ['Automaatiokunnossapito', 'Automaatiojärjestelmien huolto ja kehitys kunnossapitosopimuksilla tai yksittäisinä töinä.'],
    ],
    principlesEyebrow: 'Toimintamme periaatteet', principlesTitle: 'Turvallisuus ensin. Laatu aina.', aboutText: 'PV Electrics Oy on vuonna 2025 perustettu, nopeasti kasvanut sähkö- ja automaatioalan asiantuntijayritys. Tarjoamme Etelä-Suomen alueella asennus- ja kunnossapitopalveluita aina 1000V asti, sekä käytönjohtajapalveluita 20kV saakka. Tarjoamme myös kaikkialle Eurooppaan laajasti erilaisia projektiluontoisia töitä. 20 hengen tiimimme koostuu kokeneista ammattilaisista, joille laatu ja toimintavarmuus ovat ykkösasioita.',
    principles: [['Turvallisuus', 'Noudatamme SFS 6002 -standardia, viranomaismääräyksiä sekä yrityksen sisäisiä ohjeita.'], ['Laatu', 'Seuraamme laatua sisäisillä tarkastuksilla, pöytäkirjoilla ja työmaavalvonnalla.'], ['Ympäristö', 'Huomioimme toiminnassamme jätehuollon, kemikaaliturvallisuuden sekä poikkeustilanteet.']],
    teamEyebrow: 'Yhteyshenkilöt', teamTitle: 'Yhteyshenkilöt', teamText: 'Henkilöstöllämme on laaja kokemus asennus- ja kunnossapitotöistä, ja olemme helposti tavoitettavissa. Luotettavuus, sitoutuminen ja palvelun nopea saatavuus ovat toimintamme kulmakiviä.',
    contactEyebrow: 'Aloitetaan keskustelu', contactTitle: 'Onko seuraava projektisi jo mielessä?', contactText: 'Kerro meille tarpeestasi. Keskustellaan, miten voimme auttaa.',
    contact: 'Ota yhteyttä', address: 'Eskonkatu 10 · 48770 Kotka', phone: '040 777 0156', formTitle: 'Pyydä tarjous', formName: 'Nimi', formCompany: 'Yritys', formEmail: 'Sähköposti', formPhone: 'Puhelin (valinnainen)', formMessage: 'Viesti', formSubmit: 'Lähetä pyyntö', formNote: 'Lomakkeen lähetys ei ole vielä kytketty sähköpostipalveluun. Olethan yhteydessä suoraan sähköpostitse tai puhelimitse.',
    footer: 'Teollisuuden sähkö- ja automaatiourakoinnin sekä kunnossapidon kumppani.',
  },
  en: {
    nav: ['Services', 'About', 'Contact'], heroLabel: 'PV ELECTRICS OY · VIROLAHTI', heroTitle: 'Electrical and automation systems that keep production moving.', heroText: 'A partner for industrial electrical and automation contracting and maintenance in projects, renovations and new construction.', quote: 'Request a quote', servicesCta: 'Explore services', servicesEyebrow: 'What we do', servicesTitle: 'Technical work you can rely on.', servicesText: 'Versatile solutions for industrial electrical and automation needs – from implementation to maintenance.', projectsEyebrow: 'Selected work', projectsTitle: 'Work that keeps production moving.', projectsText: 'We make electrical and automation systems quietly reliable. Here are a few examples of the environments we support.', projects: [['Kouvola', 'Production line electrification', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'], ['Kotka', 'Industrial hall automation', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85'], ['Hamina', 'Maintenance partnership', 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85']], services: [['01', 'Electrical contracting', 'Electrical installations for projects, renovations and new construction.'], ['02', 'Automation contracting', 'Industrial automation solutions as part of a reliable, controllable whole.'], ['03', 'Electrical maintenance', 'Practical, proactive maintenance to support production.'], ['04', 'Automation maintenance', 'We help keep automation reliable and everyday operations running smoothly.']], principlesEyebrow: 'How we work', principlesTitle: 'Safety first. Quality always.', principles: [['Safety', 'We follow the SFS 6002 standard, official regulations and our internal instructions.'], ['Quality', 'We monitor quality through inspections, documentation and site supervision.'], ['Environment', 'We account for waste management, chemical safety and exceptional situations.']], teamEyebrow: 'People to contact', teamTitle: 'Experienced specialists, close at hand.', teamText: 'Our team has extensive experience in installation and maintenance work, and is easy to reach.', contactEyebrow: 'Start a conversation', contactTitle: 'Have a project in mind?', contactText: 'Tell us what you need. Let’s discuss how we can help.', contact: 'Get in touch', address: 'Hämeenkyläntie 187 · 49900 Virolahti', formTitle: 'Request a quote', formName: 'Name', formCompany: 'Company', formEmail: 'Email', formPhone: 'Phone (optional)', formMessage: 'Message', formSubmit: 'Send request', formNote: 'The form is not connected to an email service yet. Please contact us directly by email or phone.', footer: 'Your partner in industrial electrical and automation contracting and maintenance.'
  }
}

export function Site({ lang }: { lang: 'fi' | 'en' }) {
  const t = lang === 'en' ? {
    ...content.en,
    nav: ['Services', 'About', 'Contact'],
    heroLabel: 'PV ELECTRICS OY · VIROLAHTI',
    heroTitle: 'Electrical and automation systems that keep production moving.',
    heroText: 'A partner for industrial electrical and automation contracting and maintenance in projects, renovations and new construction.',
    quote: 'Request a quote',
    servicesCta: 'Explore services',
    servicesEyebrow: 'What we do',
    servicesTitle: 'Technical work you can rely on.',
    servicesText: 'Versatile solutions for industrial electrical and automation needs – from implementation to maintenance.',
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Work that keeps production moving.',
    projectsText: 'We make electrical and automation systems quietly reliable. Here are a few examples of the environments we support.',
    projects: [
      ['Kouvola', 'Production line electrification', 'Electrical and control systems for a new production line, from design to commissioning.', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'],
      ['Kotka', 'Industrial hall automation', 'PLC programming and control cabinets as part of a reliable whole.', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85'],
      ['Hamina', 'Maintenance partnership', 'Proactive maintenance and fast fault service to keep production running.', placeholders.hamina],
    ],
    services: [
      ['Electrical contracting', 'Electrical installations for projects, renovations and new construction.'],
      ['Automation contracting', 'PLC programming, control cabinets and industrial automation solutions for reliable operations.'],
      ['Electrical maintenance', 'Proactive maintenance, fault tracing and repairs to support production continuity.'],
      ['Automation maintenance', 'Maintenance and development of automation systems through contracts or individual assignments.'],
    ],
    principlesEyebrow: 'How we work',
    principlesTitle: 'Safety first. Quality always.',
    aboutText: 'PV Electrics Oy is a fast-growing electrical and automation specialist founded in 2025. We provide installation and maintenance services up to 1000V in Southern Finland, as well as electrical supervisor services up to 20kV. We also deliver a wide range of project-based work throughout Europe. Our 20-person team consists of experienced professionals who put quality and operational reliability first.',
    principles: [
      ['Safety', 'We follow the SFS 6002 standard, official regulations and our internal instructions.'],
      ['Quality', 'We monitor quality through inspections, documentation and site supervision.'],
      ['Environment', 'We account for waste management, chemical safety and exceptional situations.'],
    ],
    teamEyebrow: 'People to contact', teamTitle: 'People to contact', teamText: 'Our team has extensive experience in installation and maintenance work, and we are easy to reach. Reliability, commitment and fast service are at the heart of our work.',
    contactEyebrow: 'Let’s start a conversation', contactTitle: 'Is your next project already taking shape?', contactText: 'Tell us what you need. Let’s discuss how we can help.',
    contact: 'Get in touch', address: 'Eskonkatu 10 · 48770 Kotka', phone: '040 777 0156', formTitle: 'Request a quote', formName: 'Name', formCompany: 'Company', formEmail: 'Email', formPhone: 'Phone (optional)', formMessage: 'Message', formSubmit: 'Send request', formNote: 'The form is not yet connected to an email service. Please contact us directly by email or phone.',
    footer: 'Your partner in industrial electrical and automation contracting and maintenance.',
  } : content[lang]
  const [menuOpen, setMenuOpen] = useState(false)
  const localizedRole = (role: string) => lang === 'en' ? ({ 'Työnjohtaja': 'Site Supervisor', 'Projektipäällikkö': 'Project Manager' }[role] ?? role) : role
  return <div className="site-shell">
    <header className="site-header"><Link href={`/${lang}`} className="brand" aria-label="PV Electrics Oy"><img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pv_logo_ilmantaustaa-FtdYx3SzVQeExxmqZ5fCBdnqTtWXd1.avif" alt="PV Electrics Oy" /></Link><nav className="desktop-nav" aria-label="Main navigation"><a href="#palvelut">{t.nav[0]}</a><a href="#meista">{t.nav[1]}</a><a href="#yhteys">{t.nav[2]}</a></nav><div className="header-actions"><div className="language-switcher" aria-label="Language selection"><Link className={lang === 'fi' ? 'active' : ''} href="/fi" aria-label="Suomi"><span aria-hidden="true">🇫🇮</span><span className="sr-only">Suomi</span></Link><Link className={lang === 'en' ? 'active' : ''} href="/en" aria-label="English"><span aria-hidden="true">🇬🇧</span><span className="sr-only">English</span></Link></div><a className="button button-small" href="#yhteys">{t.quote}<ArrowUpRight aria-hidden="true" /></a><button className="menu-button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Sulje valikko' : 'Avaa valikko'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></header>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#palvelut" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a><a href="#meista" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a><a href="#yhteys" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a><div className="mobile-langs"><Link href="/fi">Suomi</Link><Link href="/en">English</Link></div></nav>}
    <main id="main-content"><section className="hero"><div className="hero-photo" aria-hidden="true"><img src={placeholders.hero} alt="" />{/* TODO swap in own photo */}<div className="hero-photo-overlay" /></div><div className="container hero-content"><p className="eyebrow">{t.heroLabel}</p><h1>{t.heroTitle}</h1><p className="hero-text">{t.heroText}</p><div className="hero-actions"><a className="button" href="#yhteys">{t.quote}<ArrowUpRight aria-hidden="true" /></a><a className="text-link" href="#palvelut">{t.servicesCta}<ChevronRight aria-hidden="true" /></a></div></div></section>
    <section className="proof-strip" aria-label={lang === 'fi' ? 'Luottamustekijät' : 'Trust signals'}><div className="container proof-grid"><div><strong>40+</strong><span>{lang === 'fi' ? 'vuotta kokemusta' : 'years of experience'}</span></div><div><strong>20+</strong><span>{lang === 'fi' ? 'asentajamäärä' : 'installers'}</span></div><div><strong>15+</strong><span>{lang === 'fi' ? 'tyytyväisiä asiakkaita' : 'satisfied customers'}</span></div><div><strong>{lang === 'fi' ? 'Eurooppa' : 'Europe'}</strong><span>{lang === 'fi' ? 'palvelualue' : 'service area'}</span></div></div></section>
    <section id="palvelut" className="section section-services"><div className="container"><div className="section-intro"><div><p className="eyebrow">{t.servicesEyebrow}</p><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div><div className="services-grid">{t.services.map(([title, text]) => <a href="#yhteys" className="service-card" key={title}><div><h3>{title}</h3><p>{text}</p></div></a>)}</div></div></section>
    <section id="referenssit" className="section section-projects"><div className="container"><div className="section-intro"><div><p className="eyebrow">{t.projectsEyebrow}</p><h2>{t.projectsTitle}</h2></div><p>{t.projectsText}</p></div><div className="projects-grid">{t.projects.map(([location, title, description, image]) => <a className="project-card" href="#yhteys" key={title}><img src={image} alt={`${title}, ${location}`} loading="lazy" /><div className="project-overlay"><span>{location}</span><h3>{title}</h3><p>{description}</p></div></a>)}</div></div></section>
    <section id="meista" className="section section-principles"><div className="container principles-layout"><div><p className="eyebrow">{t.principlesEyebrow}</p><h2>{t.principlesTitle}</h2><p className="about-text">{t.aboutText}</p><div className="principle-list">{t.principles.map(([title, text]) => <article className="principle" key={title}><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></div></section>
    <section className="section section-team"><div className="container"><div className="section-intro"><div><p className="eyebrow">{t.teamEyebrow}</p><h2>{t.teamTitle}</h2></div><p>{t.teamText}</p></div><div className="people-grid">{people.map(person => <article className="person" key={person.name}><div className="person-image"><NextImage src={person.image} alt={`${person.name}, ${person.role}`} fill sizes="(max-width: 700px) 50vw, 25vw" /></div><p className="person-role">{localizedRole(person.role)}</p><h3>{person.name}</h3><a href={tel(person.phone)}>{person.phone}</a><a href={mailto(person.email)}>{person.email}</a></article>)}</div></div></section>
    <section id="yhteys" className="section section-contact"><div className="container contact-layout"><div className="contact-copy"><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-details"><a href={mailto(contact.email)}>petri.heijari@pvelectrics.fi</a><a href={tel(contact.phone)}>{contact.phone}</a><span>{t.address}</span></div></div><div className="quote-form-wrap"><p className="form-kicker">{t.formTitle}</p><form className="quote-form" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Tarjouspyyntö: ${data.get('company') || data.get('name')}`); const body = encodeURIComponent(`Nimi: ${data.get('name')}\nYritys: ${data.get('company')}\nSähköposti: ${data.get('email')}\nPuhelin: ${data.get('phone') || '-'}\n\n${data.get('message')}`); window.location.href = `mailto:petri.heijari@pvelectrics.fi?subject=${subject}&body=${body}` }}><div className="form-row"><label>{t.formName}<input required name="name" /></label><label>{t.formCompany}<input name="company" /></label></div><div className="form-row"><label>{t.formEmail}<input required type="email" name="email" /></label><label>{t.formPhone}<input type="tel" name="phone" /></label></div><label>{t.formMessage}<textarea required name="message" rows={4}></textarea></label><label className="consent"><input required type="checkbox" /> <span>{lang === 'fi' ? 'Hyväksyn tietojeni käsittelyn yhteydenottoa varten.' : 'I consent to my information being used to respond to this enquiry.'}</span></label><button className="button" type="submit">{t.formSubmit}<ArrowUpRight aria-hidden="true" /></button></form></div></div></section></main>
    <footer className="site-footer"><div className="container footer-grid"><div><Link href={`/${lang}`} className="brand brand-footer"><img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pv_logo_ilmantaustaa-FtdYx3SzVQeExxmqZ5fCBdnqTtWXd1.avif" alt="PV Electrics Oy" /></Link><p>{t.footer}</p></div><div><p className="footer-label">{lang === 'fi' ? 'Navigointi' : 'Navigation'}</p><a href="#palvelut">{t.nav[0]}</a><a href="#meista">{t.nav[1]}</a><a href="#yhteys">{t.nav[2]}</a></div><div><p className="footer-label">{lang === 'fi' ? 'Kieli' : 'Language'}</p><Link href="/fi">Suomi</Link><Link href="/en">English</Link><Link href={`/${lang}/tietosuoja`}>{lang === 'fi' ? 'Tietosuoja' : 'Privacy notice'}</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} PV Electrics Oy</span><span>Y-tunnus 3510419-2</span></div></footer><a className="mobile-quote" href="#yhteys">{t.quote}<ArrowUpRight aria-hidden="true" /></a>
  </div>
}

export { content }
