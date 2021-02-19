# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$("#messageModal").on 'show.bs.modal', ->
  $(".navbar-collapse.collapse.in").removeClass "in"
