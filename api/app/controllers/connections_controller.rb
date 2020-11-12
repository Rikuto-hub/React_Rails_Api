class ConnectionsController < ApplicationController
  def index
    connections = Connection.all
    render json: connections
  end

  def create
    connection = Connection.new(connection_params)
    if connection.save
      render json: connection
    else
      render json: connection.errors
    end
  end

  private
  def connection_params
    params.require(:connection).permit(:url, :content)
  end
end