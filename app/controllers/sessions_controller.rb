class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]

      
  
      def create
      if params[:isStudent]
        model = "student".capitalize.constantize
      else
        model = "teacher".capitalize.constantize
      end

          user = model.find_by(username: params[:username])
          if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:user_type] = model.to_s
            render json: user, status: :created
          else
            render json: { error: "Invalid username or password" }, status: :unauthorized
          end
      end

      def show
        model = session[:user_type].capitalize.constantize
        user = model.find_by(id: session[:user_id])
        if user
            render json: user
          else
            render json: { error: "Not authorized" }, status: :unauthorized
          end
      end
  
      def destroy
        session.delete(:user_id)
        session.delete(:user_type)
        head :no_content 
    end 
end
