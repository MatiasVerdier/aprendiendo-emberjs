import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('number', {
    defaultValue () { return new Date().getTime() }
  }),
  project: DS.belongsTo('project')
})
