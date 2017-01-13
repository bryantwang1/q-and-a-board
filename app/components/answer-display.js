import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if(confirm("Are you sure you want to delete this answer?")) {
        this.sendAction('destroyAnswer', answer);
      }
    },

    upvote(answer)
    {
      this.sendAction('upvote', answer);
    },

    downvote(answer)
    {
      this.sendAction('downvote', answer);
    }
  }
});
