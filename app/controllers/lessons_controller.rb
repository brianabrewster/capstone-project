class LessonsController < ApplicationController

    def index
        render json: Lesson.all, status: :ok
    end

    def show
        render json: Lesson.find(params[:id]), status: :ok
    end

    def create
        lesson = Lesson.create!(lesson_params)
        render json: lesson, status: :created
    end

    def update
        lesson = Lesson.find(params[:id])
        lesson.update(lesson_params)
        render json: lesson, status: :accepted
    end

    def destroy
        lesson = Lesson.find(params[:id])
        lesson.destroy
        head :no_content
    end

    private 

    def lesson_params
        params.permit(:date, :time, :instrument, :student_id, :teacher_id)
    end
end
