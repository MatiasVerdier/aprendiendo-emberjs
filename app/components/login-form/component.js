import Ember from 'ember'
// import AdaptiveStore from 'ember-simple-auth/session-stores/adaptive'

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    login () {
      this.get('session').authenticate('authenticator:firebase', {
        'email': this.get('email'),
        'password': this.get('password')
      }).then(() => {
        this.sendAction('handleRedirect')
      }).catch((reason) => {
        this.set('errorMessage', reason.error || reason)
      })
    }
  }
})
