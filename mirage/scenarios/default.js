import { faker } from 'ember-cli-mirage';

export default function(server) {
  server.createList('todo-group', 10);
  server.createList('todo-item', 8, {
    todoGroupId() {
    return faker.random.number({
      min: 1,
      max: 3
    });
   }
  });
}
