import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo-group', { path: '/todo-groups' }, function() {
    this.route('new');
    this.route('edit', { path: '/:id/edit' });

    this.route('delete');
    this.route('detail', { path: '/1' });
  });
});

// Router.map(function() {
//   this.route('author', { path: '/authors' }, function() {
//     this.route('new');
//     this.route('detail', { path: '/:id/books' });
//   });
//   this.route('books');
// });

export default Router;
