class MessagesController < ApplicationController

    def index
        render json: Message.all, status: :ok
    end

    def show
        render json: Message.find(params[:id]), status: :ok
    end

    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    def update
        message = Message.find(params[:id])
        message.update(message_params)
        render json: message, status: :accepted
    end

    def destroy
        message = Message.find(params[:id])
        message.destroy
        head :no_content
    end

    private 

    def message_params
        params.permit(:to, :from, :body, :student_id, :teacher_id)
    end
end
