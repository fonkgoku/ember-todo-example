import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  todos: null,
  showComplete: false,

  incomplete: computed('todos.@each.isDone', function() {
    return this.get('todos').filterBy('isDone', false);
  }),

  complete: computed('todos.@each.isDone', function() {
    return this.get('todos').filterBy('isDone', true);
  }),

  actions: {
    toggleComplete() {
      const showComplete = this.get('showComplete');
      this.set('showComplete', !showComplete);
    }
  }
});
