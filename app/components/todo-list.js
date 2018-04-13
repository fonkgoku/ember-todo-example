import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  todos: null,
  showComplete: false,

  incomplete: computed('todos.@each.isDone', function() {
    let todos = this.get('todos');
    return todos.filterBy('isDone', false);
  }),

  complete: computed('todos.@each.isDone', function() {
    let todos = this.get('todos');
    return todos.filterBy('isDone', true);
  })
});
