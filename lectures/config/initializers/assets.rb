# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
 Rails.application.config.assets.precompile  << Proc.new do |path|
  # path is something like 'modules/_buttons.css' or 'stylesheets/posts.css'
  # is subpath under app/assets or vendor assets
  if path =~ /\.(css|js|woff|svg|eot|ttf )\z/

    # full_path is something like '/Users/albert/Documents/Projects/philly/app/assets/sass/modules/_utilities.scss'
    # is the absolute path of a file
    full_path = Rails.application.assets.resolve(path)

    # if path is 'modules/_buttons.css', then sub_path is '_buttons.css'
    sub_path = path.split('/')[-1]

    # include paths that is in following array
    asset_paths = %w( app/assets vendor/assets lib/assets )
    # don't compile gems and partial files (_)
    if (asset_paths.any? {|ap| full_path.include? ap}) && (!sub_path.starts_with? '_') && (!full_path.include? "gems")
      true
    else
      false
    end
  else
    false
  end
end
