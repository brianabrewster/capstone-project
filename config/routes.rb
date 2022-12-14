Rails.application.routes.draw do
  resources :messages
  resources :lessons
  resources :teachers
  resources :students
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login', to: 'sessions#create'
  get '/me', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'
  post "/signupstudent", to: "students#create"
  post "/signupteacher", to: "teachers#create"
end
