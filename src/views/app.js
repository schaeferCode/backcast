var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    console.log(exampleVideoData);
    console.log(this.videos);
    // call render
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
