import { module, test } from 'qunit';
import newUtility from 'my-first-app/utils/new-utility';

module('Unit | Utility | NewUtility', function() {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = newUtility();
    assert.ok(result);
  });
   test('Even number' ,function(assert){
	  assert.strictEqual(newUtility(2) ,true);
}); 
});
