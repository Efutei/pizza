// phina.js をグローバル領域に展開
phina.globalize();

var ASSETS = {
  image: {
    player: './img/joucho_fuantei_man.png',
    penguin: './img/penguin16_humboldt.png'
  }
};
var SCREEN_WIDTH  = 465;
var SCREEN_HEIGHT = 665;

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'CanvasScene',
  init: function() {
    this.superInit();
    // 背景色を指定
    this.backgroundColor = '#444';
    // ラベルを生成
    this.label = Label('Hello, phina.js!').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center(); // y 座標
    this.label.fill = 'white'; // 塗りつぶし色
  },
});

phina.define('Pizza', {
  superClass: 'Sprite',
  init: function(){
    this.superInit('pizza', 128, 128);
    this.x = SCREEN_WIDTH / 2;
    this.y = SCREEN_HEIGHT / 2;
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
