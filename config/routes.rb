Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resources :rooms, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
