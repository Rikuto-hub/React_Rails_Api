Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only:[:create, :destroy]
  resource :session, only: [:create, :destroy], controller: 'sessions'
  resources :articles, only:[:index, :create, :destroy]
  resources :connections, only:[:index, :create]
  resources :searches, only: [:index]

  scope '/checkout' do
    post 'create', to: 'checkout#create', as: 'checkout_create'
  end
end