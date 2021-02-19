module API
  module V1
    module CustomDevise
      class SessionsController < Devise::SessionsController
        prepend_before_filter :require_no_authentication, :only => [:create ]
        include Devise::Controllers::Helpers

        respond_to :json

        def create
          self.resource = warden.authenticate!(auth_options)
          sign_in(resource_name, resource)
          resource.reset_authentication_token!
          resource.save!
          render json: {
            auth_token: resource.reset_authentication_token,
            user_role: resource.role
          }
        end

        def destroy
          sign_out(resource_name)
        end

      end
    end
  end
end

# 1, why function definition has def keyword, not variable, we are also defining variables.
# 2, can't distinguish function and function()
# 3, has end, has to figure out when block ends
# 4, introduce symbol, one more thing to remember


# in sweet
API::V1::CustomDevise::SessionsController: < Devise::SessionsController
  prepend_before_filter 'require_no_authentication', only: ['create']
  load Devise::Controllers::Helpers
  respond_to 'json'

  create: ->
    self.resource = warden.authenticate! auth_options
    sign_in resource_name, resource
    resource.reset_authentication_token!.
    resource.save!.
    render json:
      auth_token: resource.reset_authentication_token,
      user_role: resource.role

  destroy: -> sign_out resource_name
