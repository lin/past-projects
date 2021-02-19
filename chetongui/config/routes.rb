Rails.application.routes.draw do
  root 'site#home'
  get 'weibo' => "site#weibo"
end
