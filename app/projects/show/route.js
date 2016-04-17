import Ember from 'ember'

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('project', params.id)
  },
  actions: {
    save (model) {
      model.save()
    },
    newTask (model) {
      let newTask = this.store.createRecord('task', {
        project: model
      })
      newTask.save()
    },
    updateTask (model) {
      model.save()
    },
    deleteTask (model) {
      model.destroyRecord()
    }
  }
})
