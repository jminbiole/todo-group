import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.store.findRecord('todo-group', 1, id);
  }
});
