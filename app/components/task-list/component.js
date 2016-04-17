import Ember from 'ember'

export default Ember.Component.extend({
  actions: {
    new () {
      // let project = this.store.peekRecord('project', '-KFWvi5hjjIGVxcPDMm3')
      let newTask = this.store.createRecord('task')
      newTask.save()
    }
  }
})
