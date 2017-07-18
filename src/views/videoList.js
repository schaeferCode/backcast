var VideoListView = Backbone.View.extend({

  // create initialize function and run render();



  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
