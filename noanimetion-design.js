// タイトルの影
$(function(){
  $('#backGroundTitleNoanime').typoShadow();
  $('#designNoanime').typoShadow();
  $('#about').typoShadow();
  $('#QandA').typoShadow();
  $('#blandTitleContact').typoShadow();
})

// スクロールイベントPC
$(function () {
  var topBtn1 = $('#topScroll');
  topBtn1.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn2 = $('#aboutScroll');
  topBtn2.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.about').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn3 = $('#DesignScroll');
  topBtn3.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.designNoanime').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn4 = $('#QandAScroll');
  topBtn4.click(function () {
      $('body,html').animate({
          scrollTop: window.pageYOffset + document.querySelector('.QandA').getBoundingClientRect().top
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn5 = $('#ContactScroll');
  topBtn5.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.blandTitleContact').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
// スクロールイベントPC

// モバイルメニュー
document.querySelector('.menubutton').addEventListener("click", function() {
  this.classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})
// モバイルメニュー

// スクロールイベントスマホ
$(function () {
  var topBtn1 = $('#topScrollMobile');
  topBtn1.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
document.getElementById('topScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn2 = $('#aboutScrollMobile');
  topBtn2.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.about').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
document.getElementById('aboutScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn3 = $('#DesignScrollMobile');
  topBtn3.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.designNoanime').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
document.getElementById('DesignScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn4 = $('#QandAScrollMobile');
  topBtn4.click(function () {
      $('body,html').animate({
          scrollTop: window.pageYOffset + document.querySelector('.QandA').getBoundingClientRect().top
      }, 500);
      return false;
  });
});
document.getElementById('QandAScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn5 = $('#ContactScrollMobile');
  topBtn5.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.blandTitleContact').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
document.getElementById('ContactScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})
// スクロールイベントスマホ

// ヘッダー歯車画像
const haguruma = document.querySelector('.hagurumaPic');
let   hagurumaDeg = 0,
      scrollMeasure = scrollY;
window.addEventListener("scroll", function() {
  hagurumaDeg += 60;
  if(hagurumaDeg == 360){
    hagurumaDeg = 0
  };
  let allScroll = document.querySelector('.blandTitleContact').getBoundingClientRect().top + window.pageYOffset;
  scrollMeasure = scrollY
  scrollMove = (scrollMeasure/allScroll)*100;
  console.log(scrollMeasure / allScroll)
  document.querySelector('.hagurumaPic').style.transform = 'rotate'+'('+hagurumaDeg+'deg)'
  document.querySelector('.hagurumaPic').style.left =  scrollMove + '%';
  document.querySelector('.headerUnderLineCover').style.width =  scrollMove + '%';
  if(scrollMove >= 99){
    document.querySelector('.hagurumaPic').style.left =  100 + '%';
  document.querySelector('.headerUnderLineCover').style.width =  100 + '%';
  }
})
// ヘッダー歯車画像

// QandA
document.querySelector('.QandAMenu1').addEventListener("click", function() {
  this.classList.toggle("active");
  document.querySelector(".AnswerArea1").classList.toggle("open");
  document.querySelector(".questionAreaLi1").classList.toggle("open");
})

document.querySelector('.QandAMenu2').addEventListener("click", function() {
  this.classList.toggle("active");
  document.querySelector(".AnswerArea2").classList.toggle("open");
  document.querySelector(".questionAreaLi2").classList.toggle("open");
})

document.querySelector('.QandAMenu3').addEventListener("click", function() {
  this.classList.toggle("active");
  document.querySelector(".AnswerArea3").classList.toggle("open");
  document.querySelector(".questionAreaLi3").classList.toggle("open");
})
// QandA