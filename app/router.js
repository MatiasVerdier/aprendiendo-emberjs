import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('projects', function () {
    this.route('show', {path: ':id'})
  })
  this.route('tasks', {path: ':projectId/:id'})
})

export default Router
