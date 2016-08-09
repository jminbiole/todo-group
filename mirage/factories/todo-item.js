import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
task() {
  return faker.company.bsBuzz();
}
});
