import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveItem(formValues) {
      this.store.createRecord('todo-item', formValues).save();
    },
    saveCategory(model, formValues) {
      model.set('title', formValues.title);
      model.save().then(() => {
        // Redirect
          this.transitionToRoute('todo-group.index');
        });
      },
    destroy(formValue) {
        formValue.destroyRecord();
    },
    isToggled(checked) {

    }
  }
});
