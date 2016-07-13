import Ember from 'ember';

export default Ember.Controller.extend({
  currentTime: Ember.computed(function() {
    return new Date().toISOString();
  }),
});
