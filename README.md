# [yusuf-kami.github.io](//yusuf-kami.github.io)
Personal website powered by Jekyll and GitHub Pages showcasing history of dev work

## CNAME
[yusuffadairo.com](//yusuf-kami.github.io)

## Requirements
- ruby >= 2.0.0 
- gpg >= 1.4.1
- rvm >= 1.27.0
- bundler >= 1.12.1
- Gemfile
    - ['github-pages'](https://rubygems.org/gems/github-pages)
    - ['therubyracer'](https://rubygems.org/gems/therubyracer)

## Installation 
1. Use the ``cd`` command to navigate to the directory 
2. Install the gems in the ``Gemfile``
    
    ```
        $ bundle install
    ```  
3. Start up the jekyll server

    3.a. To build the pages of the site and serve them
    
    ```
        $ jekyll serve --host 0.0.0.0 
    ```
    3.b. Or to allow jekyll to listen to changes in files and update the site build
    
    ```
        $ jekyll serve --force_polling --host 0.0.0.0
    ```
4. The jekyll server will be active on port 4000

## Versions
- June 2015 - April 2016: [1.0 - yusufsoyo.com](//github.com/yusuf-kami/yusuf-kami.github.io/tree/yusufsoyo.com)
- Apri 2016: [2.0 - yusuffadairo.com](//github.com/yusuf-kami/yusuf-kami.github.io/tree/master)
