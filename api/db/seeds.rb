User.create!( email: 'root@gmail.com',
              name: 'Root',
              password: 'password')
User.create!( email: 'test@gmail.com',
  name: 'Admin',
  password: 'password')
article = User.first.articles.create!(
  name: 'Ehang184',
  price: '100000',
  content: '人を乗せて自動飛行できるドローンです',
)
article.image.attach(io: File.open('./app/images/Ehang184.jpg'), filename: 'Ehang184.jpg')
article = User.first.articles.create!(
  name: 'PARROT「ANAFI」PF728005',
  price: '5000',
  content: '4KHDRカメラを搭載した空撮ドローンです。'
)
article.image.attach(io: File.open('./app/images/ANAFI.jpg'), filename: 'ANAFI.jpg')
article = User.first.articles.create!(
  name: 'GRIFF 135',
  price: '70000',
  content: '大型ドローン製造に精通したノルウェーの技術集団「GRIFF」が提供する世界最大クラスのドローン。',
)
article.image.attach(io: File.open('./app/images/GRIFF135.jpg'), filename: 'GRIFF135.jpg')
article = User.first.articles.create!(
  name: 'Tello',
  price: '3000',
  content: '「Tello」はDJIのテクノロジーを搭載したRyze Tech社製のドローンで、80gという非常に軽量な小型ドローンです。',
)
article.image.attach(io: File.open('./app/images/Tello.jpg'), filename: 'Tello.jpg')
article = User.second.articles.create!(
  name: 'RacerX',
  price: '50000',
  content: '世界最速ドローン,音速の4分の1の速度',
)
article.image.attach(io: File.open('./app/images/RacerX.jpg'), filename: 'RacerX.jpg')

User.first.connections.create!([
  { url: 'https://www.youtube.com/watch?v=tFeYeORrVEk',
    content: 'ドローンで撮影した絶景',
    tag: '景色' },
  { url: 'https://www.youtube.com/watch?v=B6HT_kYO9To',
    content: '2億ドルのドローン',
    tag: '大型' },
])

User.second.connections.create!([
  { url: 'https://www.youtube.com/watch?v=gIM4zKvsTIQ',
    content: 'ドローンレース',
    tag: 'レース' }
])

profile = Profile.create!(
    user_id: 1,
    name: 'Root',
    introduction: '宜しくお願いします。',
)
profile.avatar.attach(io: File.open('./app/images/avatar.png'), filename: 'avatar.jpg')

profile = Profile.create!(
  user_id: 2,
  name: 'Admin',
  introduction: 'こんにちは.',
)
profile.avatar.attach(io: File.open('./app/images/avatar_v2.png'), filename: 'avatar.jpg')