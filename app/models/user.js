import DS from 'ember-data'

export default DS.Model.extend({
  uid: DS.attr('string'),
  displayName: DS.attr('string'),
  avatarImage: DS.attr('string'),
  projects: DS.hasMany('project', {async: true})
})
