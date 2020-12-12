import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | new mod', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('new-mod', {});
    assert.ok(model);
  });
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('new-mod', {});
    assert.equal(model.first,'helllolo');
  });
});
