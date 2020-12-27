class CheckoutController < ApplicationController
  skip_before_action :require_login

  def create
    @current_user = User.find_by(id: session[:user_id])
    article = Article.find(params[:id])
    if @current_user
      @session = Stripe::Checkout::Session.create({
        customer_email: @current_user.email,
        payment_method_types: ['card'],
        metadata: {
          customer_id: @current_user.id,
          seller_id: article.user.id,
          seller_email: article.user.email,
          article_id: article.id},
        billing_address_collection: 'required',
        line_items: [{
          price_data: {
            unit_amount: article.price,
            currency: 'jpy',
            product_data: {
              name: article.name,
              # images: [url_for(article.image)],
            },
          },
          quantity: "1",
        }],
        mode: 'payment',
        success_url: 'http://' + ENV['DOMAIN_URL'] + '?success=true',
        cancel_url:  'http://' + ENV['DOMAIN_URL'] + '?canceled=true',
      })
      render json: @session
      # {
      #   id: session.id
      # }.to_json  
    else
      @session = Stripe::Checkout::Session.create({
        payment_method_types: ['card'],
        metadata: {
          seller_id: article.user.id,
          seller_email: article.user.email,
          article_id: article.id},
        billing_address_collection: 'required',
        line_items: [{
          price_data: {
            unit_amount: article.price,
            currency: 'jpy',
            product_data: {
              name: article.name,
              # images: [url_for(article.image)],
            },
          },
          quantity: "1",
        }],
        mode: 'payment',
        success_url: 'http://' + ENV['DOMAIN_URL'] + '?success=true',
        cancel_url:  'http://' + ENV['DOMAIN_URL'] + '?canceled=true',
      })
      render json: @session
      # {
      #   id: session.id
      # }.to_json  
    end
  end
end