import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    didTransition() {
      let flashMessages = this.get('flashMessages');
      flashMessages.add({
        message: 'Congratulations...You have won....The time',
        timeout: 3000,
      });
    },
  }
});
