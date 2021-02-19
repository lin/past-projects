// 196 characters
app.directive 'productTabs', ->
  restrict: "E"
  templateUrl: "product-tabs.html"
  controller: ->
    @tab = 1
    @isSet  = checkTab -> @tab == checkTab
    @setTab = setTab   -> @tab = setTab

// 227 characters, 15% more
app.directive 'productTabs', ->
  restrict: 'E'
  templateUrl: 'product-tabs.html'
  controller: ->
    @tab = 1
    @isSet = (checkTab) -> @tab == checkTab
    @setTab = (setTab) ->
      @tab = setTab
      return
    return

// 336 characters, 71% more
app.directive('productTabs', function(){
  return {
    restrict: "E",
    templateUrl: "product-tabs.html",
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(setTab) {
        this.tab = setTab;
      };
    }
  };
});
