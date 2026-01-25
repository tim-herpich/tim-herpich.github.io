# ruby "3.1" # pin to 3.1 due to incompatibility of later versions with github actions 
source "https://rubygems.org"

# GitHub Pages pins Jekyll + plugins
gem "github-pages", group: :jekyll_plugins

# Pages-compatible Nokogiri
gem "nokogiri", "< 1.19"

# Faraday v2 retry middleware (silences warning)
gem "faraday-retry"

group :development do
  gem "html-proofer", "~> 4.4", require: false
  gem "bundler-audit", require: false

  # Faster file watching on Windows
  gem "wdm", ">= 0.1.0", platforms: [:mingw, :mswin, :x64_mingw]
end