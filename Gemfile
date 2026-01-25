source "https://rubygems.org"

# ruby "3.1.0"

# GitHub Pages pins Jekyll + plugins to supported versions
gem "github-pages", group: :jekyll_plugins

# Required by html-proofer / Faraday >= 2
gem "faraday-retry"

group :development do
  # HTML + link checking
  gem "html-proofer", "~> 5.0", require: false

  # Dependency vulnerability scanning
  gem "bundler-audit", require: false
end
