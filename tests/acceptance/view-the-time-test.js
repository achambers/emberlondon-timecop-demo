import { test } from 'qunit';
import moduleForAcceptance from 'emberlondon/tests/helpers/module-for-acceptance';
import Timecop from 'timecop';

moduleForAcceptance('Acceptance | view the time', {
  beforeEach() {
    Timecop.install();
    Timecop.freeze(new Date(2012, 1, 21, 14, 30));
  },

  afterEach() {
    Timecop.returnToPresent();
    Timecop.uninstall();
  }
});

test('view the current time', function(assert) {
  assert.expect(2);
  visit('/');

  andThen(function() {
    assert.equal(find('.page').text(), 'HOME');
  });

  click('.go-to-time');

  andThen(function() {
    assert.equal(find('.time').text(), '2012-02-21T14:30:00.000Z');
  });
});
