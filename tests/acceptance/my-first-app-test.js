import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | my first app', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
	assert.dom('h2').hasText('Welcome to Super Rentals!');
	assert.dom('.jumbo a.button').hasText('About');
	await click('a.button');
	assert.equal(currentURL(), '/about');
	assert.dom('.button').hasText('Contact');
	await click('.button');
	assert.dom('nav').exists();
	assert.dom('nav .menu-index').hasText('Super Rentals');
	
  });
});
