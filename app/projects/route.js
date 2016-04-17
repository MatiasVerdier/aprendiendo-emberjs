import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return this.store.findAll('project')
  },
  actions: {
    new () {
      let newProject = this.store.createRecord('project')
      newProject.save().then(() => {
        this.transitionTo('projects.show', newProject.id)
      })
    },
    delete (model) {
      model.destroyRecord().then(() => {
        this.transitionTo('projects')
      })
    }
  }
})
