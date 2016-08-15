import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveCategory(model, formValues) {
      model.set('title', formValues.title);
      model.save().then(() => {
        // Redirect
          this.transitionToRoute('todo-group.index');
        });
    },
  },
});
