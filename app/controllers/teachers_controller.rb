class TeachersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def index
        render json: Teacher.all, status: :ok
    end

    def show
        render json: Teacher.find(params[:id]), status: :ok
    end

    def create
        render json: Teacher.create(teacher_params), status: :created
    end

    def destroy
        teacher = Teacher.find(params[:id])
        teacher.destroy
        head :no_content
    end

    private

    def teacher_params
        params.permit(:name, :age, :city, :instruments, :experience, :rate, :username, :password, :isStudent)
    end
end
