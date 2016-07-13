import Ember from 'ember';

export default Ember.Service.extend({
  now() {
    return new Date();
  }
});
