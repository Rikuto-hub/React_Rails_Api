class CheckoutController < ApplicationController
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
      success_url: DOMAIN + '?success=true',
      cancel_url: DOMAIN + '?canceled=true',
    })
    render json: @session
    # {
    #   id: session.id
    # }.to_json  
  end
end