import hbs from 'hbs';

hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear()
})