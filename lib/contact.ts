export const contact = {
  phone: '040 747 8566',
  email: 'etunimi.sukunimi@pvelectrics.fi',
  address: 'Eskonkatu 10 · 48770 Kotka',
  team: [
    { name: 'Petri Heijari', role: 'Työnjohtaja', phone: '040 777 0156', email: 'petri.heijari@pvelectrics.fi', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/petri%20heijari-UsvZyQjbJffenU9KCo5fLk120mQQfU.avif' },
    { name: 'Valtteri Nykänen', role: 'Projektipäällikkö', phone: '050 323 2651', email: 'valtteri.nykanen@pvelectrics.fi', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/valtteri%20nyk%C3%A4nen-gYjMh7QadtNmZqN4Tyovb7ggD3PJ6W.avif' },
    { name: 'Jarkko Paldan', role: 'Projektipäällikkö', phone: '050 562 6164', email: 'jarkko.paldan@pvelectrics.fi', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jarkko%20paldan-Oba4UUuccUUoKGGM8eyBRjdzqIdbmy.avif' },
    { name: 'Mikael Vilkki', role: 'Työnjohtaja', phone: '040 747 8566', email: 'mikael.vilkki@pvelectrics.fi', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mikael%20vilkki-hohXRnUrsqs6w1wEHx3SjhIRP6pjRX.avif' },
  ],
}

export const tel = (value: string) => `tel:${value.replaceAll(' ', '')}`
export const mailto = (value: string) => `mailto:${value}`
export const placeholders = {
  hero: '/hero-industrial-electricians.png',
  hamina: '/reference-hamina-maintenance.png',
}

export { contact as default }
