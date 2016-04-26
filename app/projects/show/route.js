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
      let project = this.store.peekRecord('project', model.id)
      let newTask = this.store.createRecord('task', {
        project: project
      })
      newTask.save().then(() => {
        project.save()
      })
    },
    updateTask (model) {
      let task = this.store.peekRecord('task', model.id)
      task.save()
    },
    deleteTask (model) {
      let task = this.store.peekRecord('task', model.id)
      task.destroyRecord()
    }
  }
})
