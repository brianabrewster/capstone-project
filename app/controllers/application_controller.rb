class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    before_action :authorized

  

#     def current_user
#       student = Student.find_by(id: session[:user_id])
#       teacher = Teacher.find_by(id: session[:user_id])
#       if student 
#         render json: student
#       else render json: teacher
#       end
#   end 

  private
  
    def render_not_found error
        render json: {error: "#{error.model} not found" }, status: :not_found
    end

    def render_unprocessable_entity invalid
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorized 
      render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
