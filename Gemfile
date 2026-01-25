source "https://rubygems.org"

# ruby "3.1" # pin to 3.1 due to incompatibility of later versions with github actions 

# GitHub Pages pins Jekyll + plugins to supported versions
gem "github-pages", group: :jekyll_plugins

gem "nokogiri", "< 1.19"

group :development do
  # Ruby 3.1–compatible, minimal dependency tree
  gem "html-proofer", "~> 4.4", require: false

  # Dependency vulnerability checks
  gem "bundler-audit", require: false
end
