  import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.company.bsBuzz();
  }
});
