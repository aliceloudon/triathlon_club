Rails.application.routes.draw do

  # get 'members' => 'members#index'
  # get 'members/:id' => 'members#show'
  # post 'members' => 'members#create'

  # get 'results' => 'results#index'

  # resources :members do
  #   resources :results
  # end

  scope path: "api" do
    resources :members, defaults: {format: :json} do
      resources :results
    end
    resources :results, defaults: {format: :json}
    resources :time_trials, defaults: {format: :json}
  end

  get 'api/results' => 'results#all_results'

  # get 'timetrials' => 'timetrials#index'

end
