// $(function () {
//   // slickを利用してカルーセルを実装する
//   $('.slider').slick({
//     arrows: false,
//     dots: true,
//     autoplay: true,
//     fade: true,
//     speed: 1500,
//     pauseOnHover: false
//   });
document.addEventListener('DOMContentLoaded', () => {

  // スライダーの取得をする
  const slider = document.querySelector('.slider');

  // slickの初期化と設定を行う
  new Glide(slider, {
    // カルーセルの種類
    type: 'carousel',

    // 最初のスライドのインデックス
    startAt: 0,

    // 一度に表示するスライドの数
    perView: 1,

    // 自動再生の間隔(ミリ秒)
    autoplay: 1500,

    // マウスオーバー時に自動再生を一時停止するかどうか
    hoverpause: false,

    // アニメーションの完了時間(ミリ秒)
    animationDuration: 1500,

    // アニメーションのタイミング時間
    animationTimingFunc: 'ease',

  })
    // mount() は、Glide.jsのメソッドであり、Glide インスタンスを生成した後に呼び出す必要があるメソッドです。
    // このメソッドは、Glide.jsがスライダーの動作を開始するためのものです。Glide.jsを使うと、
    // インスタンスを作成して構成した後、mount() を呼び出すことでスライダーが初期化され、動作を始めます。
    .mount();


// リンクのホバー時に不透明度をアニメーションで変更する
// $('a').hover(
//   function () {
//     $(this).animate({ 'opacity': 0.6 }, 300);
//   },
//   function () {
//     $(this).animate({ 'opacity': 1.0 }, 300);
//   }
// );

// ホバーとは特定のHTML要素内にカーソルが重なっているかどうか判断することができる
// links定数に全てのa要素を代入する
const links = document.querySelectorAll('a');
// links に含まれる各要素に対して、アロー関数を一度ずつ実行
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'opacity 300ms';
    link.style.opacity = 0.6;
  });
  link.addEventListener('mouseout', () => {
    link.style.transition = 'opacity 300ms';
    link.style.opacity = 1.0;
  });
})
// const links = document.querySelectorAll('a');: これは、ドキュメント内の全ての a 要素を取得して、それらの要素を含む NodeList を links という定数に代入しています。

// links.forEach(link => { ... });: これは、links に含まれる各要素に対して、指定されたアロー関数を一度ずつ実行します。link は各 a 要素を指します。

// link.addEventListener('mouseover', () => { ... });: これは、各リンクに対してマウスが要素に乗ったときに実行される mouseover イベントのリスナーを追加しています。

// link.style.transition = 'opacity 300ms';: マウスオーバー時に適用されるスタイルとして、opacity プロパティに対して 300ms のトランジションを設定しています。これにより、不透明度の変化が滑らかになります。

// link.style.opacity = 1.0;: マウスオーバー時の不透明度を 1.0 に設定しています。つまり、完全に不透明になります。

// このコードは、各リンク要素にマウスが乗ったときに、不透明度を 1.0 に変更することでホバーエフェクトを実現しています。


// 100pxを境にTOPに戻るボタンの表示・非表示を切り替える  
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 100) {
//     $('#page-top').fadeIn();
//   } else {
//     $('#page-top').fadeOut();
//   }
// });
// 100pxを境にTOPに戻るボタンの表示・非表示を切り替える
window.addEventListener('scroll', ()=> {
  const pageTop = document.getElementById('page-top');
  if (window.scrollY > 100) {
    pageTop.style.display = 'block';
  } else {
    pageTop.style.display = 'none';
  }
});

// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
// $('a[href^="#"]').click(function () {
//   const speed = 500;
//   const href = $(this).attr('href');
//   let $target;
//   if (href == '#') {
//     $target = $('html');
//   }
//   else {
//     $target = $(href);
//   }
//   const position = $target.offset().top;
//   $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
//   return false;
// });
// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', (e)=> {
    e.preventDefault();
    const speed = 500;
    const href = link.getAttribute('href');
    let target;
    if (href === '#') {
      target = document.documentElement;
    } else {
      target = document.querySelector(href);
    }
    const position = target.offsetTop;
    window.scrollTo({ top: position, behavior: 'smooth' });
  });
});
// // スクロールしたときにセクションをフェードインさせる
// $(window).scroll(function () {
//   const scrollAmount = $(window).scrollTop();
//   const windowHeight = $(window).height();
//   $('section').each(function () {
//     const position = $(this).offset().top;
//     if (scrollAmount > position - windowHeight + 100) {
//       $(this).addClass('fade-in');
//     }
//   });
// });
// スクロールしたときにセクションをフェードインさせる
window.addEventListener('scroll', ()=> {
  const scrollAmount = window.scrollY;
  const windowHeight = window.innerHeight;
  document.querySelectorAll('section').forEach(section=>{
    const position = section.offsetTop;
    if (scrollAmount > position - windowHeight + 100) {
      section.classList.add('fade-in');
    }
  });
});
// Worksの画像をクリックしたときにモーダルで拡大表示する
// $('.works img').click(function () {
//   const imgSrc = $(this).attr('src');
//   $('.big-img').attr('src', imgSrc);
//   $('.modal').fadeIn();
//   return false
// });
// Worksの画像をクリックしたときにモーダルで拡大表示する
document.querySelectorAll('.works img').forEach(img => {
  img.addEventListener('click', (e) => {
    const imgSrc = img.getAttribute('src');
    document.querySelector('.big-img').setAttribute('src', imgSrc);
    document.querySelector('.modal').style.display = 'block';
    //return false;
    e.preventDefault();
  });
});
// 閉じるボタンをクリックしたときにモーダルを閉じる
// $('.close-btn').click(function () {
//   $('.modal').fadeOut();
//   return false
// });

// 閉じるボタンをクリックしたときにモーダルを閉じる

  document.querySelector('.close-btn').addEventListener('click', () =>{
    document.querySelector('.modal').style.display = 'none';
  });

});


