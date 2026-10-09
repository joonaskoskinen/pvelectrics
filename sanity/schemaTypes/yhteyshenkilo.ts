import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'yhteyshenkilo',
  title: 'Yhteyshenkilö',
  type: 'document',
  fields: [
    defineField({
      name: 'nimi',
      title: 'Nimi',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titteli',
      title: 'Titteli',
      type: 'string',
    }),
    defineField({
      name: 'puhelin',
      title: 'Puhelin',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Sähköposti',
      type: 'string',
    }),
    defineField({
      name: 'kuva',
      title: 'Kuva',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'jarjestys',
      title: 'Järjestys',
      type: 'number',
    }),
  ],
})

