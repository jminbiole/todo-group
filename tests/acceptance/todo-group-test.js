import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group');

test('visiting /todo-groups', function(assert) {
  visit('/todo-groups');

  andThen(function() {
    assert.equal(currentRouteName(), 'todo-group.index');
    assert.equal(findWithAssert('.page-title').text().trim(), 'Categories');
  });
});
// test('visiting /authors shows the author route and a title', function(assert) {
//   visit('/authors');
//
//   andThen(function() {
//     assert.equal(currentRouteName(), 'author.index');
//     assert.equal(findWithAssert('.page-title').text().trim(), 'Authors');
//   });
// });
