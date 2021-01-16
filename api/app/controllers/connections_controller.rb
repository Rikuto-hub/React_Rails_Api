class ConnectionsController < ApplicationController
  skip_before_action :require_login, only: [:index]

  def index
    connections = Connection.all
    render json: connections.map{
      |connection|
      connection.as_json.merge({ 
        user_name: connection.user.profile.name,
      })
    }
  end

  def create
    connection = @current_user.connections.build(connection_params)
    if connection.save
      render json: { status: 'ok', connection: connection }
    else
      render json: connection.errors
    end
  end

  private
  def connection_params
    params.require(:connection).permit(:url, :content, :tag)
  end
end