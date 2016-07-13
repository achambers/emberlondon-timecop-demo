import Ember from 'ember';

export default Ember.Controller.extend({
  clock: Ember.inject.service(),

  currentTime: Ember.computed(function() {
    let clock = this.get('clock');
    return clock.now().toISOString();
  }),
});
