class Api::ListsController < ApplicationController
  def create
    board = Board.find(params[:board_id])

    @list = List.new(list_params)

    @list.board_id = board.id

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

    rescue ActionController::ParameterMissing
      @error = "Invalid list data provided"
      render 'api/shared/error', status: :unprocessable_entity

    rescue ActiveRecord::RecordNotFound
      @error = "Record not found"
      render 'api/shared/error', status: 404      
  end

  def update
    @list = List.find(params[:id])
    @list.update(update_list_params)
    render :update, status: :ok

  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity

  rescue ActiveRecord::RecordNotFound
    @error = "Record not found"
    render 'api/shared/error', status: 404    
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end

  def update_list_params
    params.require(:title)
    params.permit(:title)
  end
end