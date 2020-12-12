import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function(hooks) {
  setupRenderingTest(hooks);

  
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

   // await render(hbs`<Rental::Image />`);

   // assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
   
   // assert.equal(this.element.textContent.trim(), 'template block text');
   test('it give error about images',async function(assert){
   await render(hbs`<Rental::Image
   src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"/>`);
		
	    assert.dom('.image').exists();
    assert.dom('.image img').hasAttribute('src', '/assets/images/teaching-tomster.png');
    assert.dom('.image img').hasAttribute('alt', 'Teaching Tomster');
   

  });
});
