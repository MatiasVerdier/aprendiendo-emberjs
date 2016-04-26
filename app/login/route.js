import Ember from 'ember'

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    handleRedirect () {
      this.transitionTo('projects')
    }
  }
})
