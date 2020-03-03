class Api::CardsController < ApplicationController  
  def show
    @card = Card.find(params[:id])
  
  rescue ActiveRecord::RecordNotFound
    @error = "Record not found"
    render 'api/shared/error', status: 404
  end


end