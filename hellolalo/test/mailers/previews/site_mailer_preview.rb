# Preview all emails at http://localhost:3000/rails/mailers/site_mailer
class SiteMailerPreview < ActionMailer::Preview
  def promo
    SiteMailer.promo()
  end
end
