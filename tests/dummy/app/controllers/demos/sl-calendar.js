import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        logLabel( dateObjects ) {
            window.console.log( dateObjects[ 0 ] );
        }
    }
});
