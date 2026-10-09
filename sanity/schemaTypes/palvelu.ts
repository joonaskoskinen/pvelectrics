import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'palvelu',
  title: 'Palvelu',
  type: 'document',
  fields: [
    defineField({
      name: 'otsikko',
      title: 'Otsikko',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kuvaus',
      title: 'Kuvaus',
      type: 'text',
    }),
    defineField({
      name: 'kohdat',
      title: 'Kohdat',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'jarjestys',
      title: 'Järjestys',
      type: 'number',
    }),
  ],
})

