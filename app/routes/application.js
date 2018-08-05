import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      title: 'Go to store',
      isDone: false
    },
    {
      title: 'Read a book',
      isDone: false
    },
    {
      title: 'Do stuff',
      isDone: true
    }];
  }
});
