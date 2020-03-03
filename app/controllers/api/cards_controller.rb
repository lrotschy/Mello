class Api::CardsController < ApplicationController  
  def show
    @card = Card.find(params[:id])
  
  rescue ActiveRecord::RecordNotFound
    @error = "Record not found"
    render 'api/shared/error', status: 404
  end

  def create 
    
    list = List.find(params[:list_id])

    @card = Card.new(card_params) 

    @card.list_id = list.id

    if @card.save 
      render :create, status: :created
    else 
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end 

  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity

  rescue ActiveRecord::RecordNotFound
    @error = "Record not found"
    render 'api/shared/error', status: 404   
  end 

  private 

  def card_params 
    params.require(:card).permit(:title)
  end
end