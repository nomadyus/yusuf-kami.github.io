# [yusuf-kami.github.io](//yusuf-kami.github.io)
Personal website powered by Jekyll and GitHub Pages showcasing history of dev work

## CNAME
[yusuffadairo.com](//yusuf-kami.github.io)

## Requirements
- ruby >= 2.0.0 
- gpg >= 1.4.1
- [rvm >= 1.27.0](https://rvm.io/)
- [bundler >= 1.12.1](https://bundler.io/)
- Gemfile
    - ['github-pages'](https://rubygems.org/gems/github-pages)
    - ['therubyracer'](https://rubygems.org/gems/therubyracer)

## Installation 
1. Use the `cd` to navigate to the directory 
2. Install the gems in the `Gemfile`
    
    ```
        bundle install
    ```
3. Start up the jekyll server
    
    ```
        jekyll serve --host 0.0.0.0 
    ```
4. The jekyll server will be active on port 4000

## Versions
- Apri 2016: [2.0 - yusuffadairo.com](//github.com/yusuf-kami/yusuf-kami.github.io/tree/master)
- June 2015 - April 2016: [1.0 - yusufsoyo.com](//github.com/yusuf-kami/yusuf-kami.github.io/tree/yusufsoyo.com)

## Issues
- If unable to run Jekyll due to bundler issues like `block in setup` run Jekyll using the command:
  ```
    bundle exec jekyll serve --host 0.0.0.0
  ```
- If unable to install `therubyracer` NOTE: `therubyracer` uses `libv8` which doesnt yet exists for Windows. However, Windows should come with a JScript, the Microsoft JavaScript runtime, which rails (via execjs) will automatically detect and use, so you should be able to just remove your dependency on therubyracer. [Source](https://stackoverflow.com/questions/6356450/therubyracer-gem-on-windows)

- If you have to use a different version of Python use this [guide](https://conda.io/docs/py2or3.html) of [Anaconda](https://www.continuum.io/) to manage Python versions
- To uninstall all gems
  ```
    gem uninstall --all --force
  ```
- To upgrade your version of RubyGems
  ```
    gem update --system    
  ```