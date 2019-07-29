Rails.application.routes.draw do
  get 'greeting', to: 'greeting#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
