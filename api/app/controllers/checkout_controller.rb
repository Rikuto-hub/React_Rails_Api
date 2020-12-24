class CheckoutController < ApplicationController
  skip_before_action :require_login

  def create

    article = Article.find(params[:id])

    @session = Stripe::Checkout::Session.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          unit_amount: article.price,
          currency: 'jpy',
          product_data: {
            name: article.name,
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