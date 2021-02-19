class SiteController < ApplicationController
  def message
    puts params["name"]
    puts params["email"]
    puts params["message"]
    SiteMailer.new_message(params["name"], params["email"], params["message"]).deliver_now
    flash[:notice] = "Thanks! We’ll get back to you shortly"
    redirect_to "/"
  end
end
