Gem::Specification.new do |s|
  s.name     = 'White Glass'
  s.version  = '1.0'
  s.license  = 'MIT'
  s.summary  = 'A simple glossy looking site for a personal web portfolio'
  s.author   = 'Yusuf Fadairo'
  s.email    = 'hi@yusuffadairo.com'
  s.homepage = 'https://github.com/yusuf-kami/yusuf-kami.github.io/white-glass'
  s.files    = `git ls-files -z`.split("\x0").grep(%r{^_(sass|includes|layouts)/})
end