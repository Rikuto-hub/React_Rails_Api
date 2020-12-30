require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
require "rails/test_unit/railtie"

require 'stripe'

# Stripe.api_key =  ENV['PAY_SECRET_KEY']

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.


module Api
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    Rails.application.config.active_storage.service_urls_expire_in = 1.hour
    Bundler.require(*Rails.groups)
    Dotenv::Railtie.load
    Stripe.api_key =  ENV['PAY_SECRET_KEY']
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use ActionDispatch::ContentSecurityPolicy::Middleware
  end
end
