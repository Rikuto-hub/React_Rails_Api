# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Article.create(name: 'test', price: 10000, content: 'test-test')
# Article.create(name: 'test2', price: 20000, content: 'test-test2')

Connection.create(url: 'https://www.youtube.com/watch?v=tFeYeORrVEk', content: "ドローンで撮影した絶景です。よかったら見てください！")
Article.create(name: 'PARROT「ANAFI」PF728005', price: 10000, content:'4KHDRカメラを搭載した空撮ドローンです。
  高画質な映像を撮影できるほか、独自の180°ジンバルと最大2.8倍のロスレスズームによってブレのない鮮明な空撮が可能。高画質な空撮にこだわりたい方におすすめのモデルです。')