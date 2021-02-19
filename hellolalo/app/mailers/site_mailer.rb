class SiteMailer < ApplicationMailer
  include Roadie::Rails::Automatic
  
  def new_message(name, email, message)
    @message = message
    @name = name
    @email = email
    mail to: "dan@kegg.co", subject: "Message from #{name} - hellolalo.com"
  end

  def promo
    mail to: "linyingkui@gmail.com", from: "yingkui@cataluv.com", subject: "Welcome to Lalo"
  end
end
