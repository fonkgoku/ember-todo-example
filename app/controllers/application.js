import Controller from '@ember/controller';

export default Controller.extend({
  todoTitle: '',
  actions: {
    addTodoAndClear(title) {
      this.send('addTodo', title);
      this.set('todoTitle', '');
    }
  }
});
