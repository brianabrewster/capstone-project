class LessonsController < ApplicationController

    def index
        render json: Lesson.all, status: :ok
    end

    def show
        render json: Lesson.find(params[:id]), status: :ok
    end

    def create
        render json: Lesson.create(lesson_params), status: :created
    end

    def destroy
        lesson = Lesson.find(params[:id])
        lesson.destroy
        head :no_content
    end

    private 

    def lesson_params
        params.permit(:date, :time, :instrument)
    end
end
