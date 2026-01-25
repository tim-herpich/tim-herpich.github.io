source "https://rubygems.org"

# ruby "3.1" # pin to 3.1 due to incompatibility of later versions with github actions 

# GitHub Pages pins Jekyll + plugins to supported versions
gem "github-pages", group: :jekyll_plugins

# Required by html-proofer / Faraday >= 2
gem "faraday-retry"

group :development do
  # HTML + link checking
  gem "html-proofer", "~> 5.0", require: false

  # Dependency vulnerability scanning
  gem "bundler-audit", require: false

  # Fix for Ruby 3.1: afm 1.0.0 requires Ruby >= 3.2
  gem "afm", "< 1.0"

end
