import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveItem(todoItem, newItem, reset) {
      const saveThis = this.store.createRecord('todo-item', newItem);
      saveThis.set('group', todoItem);
      saveThis.save();
      reset();
    },
    destroy(todoItem) {
        todoItem.destroyRecord();
    },
    isToggled(todoItem) {
      todoItem.toggleProperty('done');
      todoItem.save();
    }
  }
});
