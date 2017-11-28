// phina.js をグローバル領域に展開
phina.globalize();

var ASSETS = {
  image: {
    pizza: './img/pizza.png'
  }
};
var SCREEN_WIDTH  = 465;
var SCREEN_HEIGHT = 665;

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    // 背景色を指定
    this.backgroundColor = '#444';
    // ラベルを生成
    this.label = Label('Pizza').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center(2); // y 座標
    this.label.fill = 'white'; // 塗りつぶし色
    this.pizza = Pizza().addChildTo(this);
    this.pizza.onpointstart = function(){
      this.rotate();
      this.setInteractive(false);
    };
  },
  update: function(){
  }
});

phina.define('Pizza', {
  superClass: 'Sprite',
  init: function(){
    this.superInit('pizza', 512, 512);
    this.x = SCREEN_WIDTH / 2;
    this.y = SCREEN_HEIGHT / 2;
    // タッチを有効にする
    this.setInteractive(true);
  },
  rotate: function(){
    this.tweener
    .clear()
    .to({
      rotation: 1079,
      y: 10,
      scaleX: 0,
      scaleY: 0
    },1500,"easeOutQuart")
    .set({
      rotation: 0,
      y: SCREEN_HEIGHT / 2
    })
    .to({
      scaleX: 1,
      scaleY: 1
    },1000)
    .call(function(){
      this.target.setInteractive(true);
    });
  }
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
  });
  // アプリケーション実行
  app.run();
});
