Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  


  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/users", to: "users#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :recipes
  resources :comments

  resources :categories, only: [:index, :show] do
    resources :recipes, only: [:index]
  end

  resources :recipes, only: [:index, :show] do
    resources :comments, only: [:index]
  end

end
