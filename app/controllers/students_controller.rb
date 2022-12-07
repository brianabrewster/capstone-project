class StudentsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def index
        render json: Student.all, status: :ok
    end

    def show
        student = Student.find(params[:id])
        render json: student, status: :ok
    end

    def create
        render json: Student.create(student_params), status: :created
    end

    def destroy
        student = Student.find(params[:id])
        student.destroy
        head :no_content
    end

    private

    def student_params
        params.permit(:name, :age, :city, :instruments, :experience, :username, :password, :isStudent)
    end
end

