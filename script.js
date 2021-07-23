// タイトルの影
$(function(){
    $('#backGroundTitle').typoShadow();
    $('#design').typoShadow();
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
          scrollTop: document.querySelector('.design').getBoundingClientRect().top + window.pageYOffset
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
          scrollTop: document.querySelector('.design').getBoundingClientRect().top + window.pageYOffset
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

// アニメーション１
const picAllRight =  document.querySelectorAll(".firstAnimationRightPicAllRight"),
      picAllLeft =  document.querySelectorAll(".firstAnimationLeftPicAllLeft");

window.addEventListener("load", function(){
    for (let i = 0; i < picAllLeft.length; i++){
      picAllLeft[i].style.animationDelay = (i*.2)+'s';
  }
    for (let i = 0; i < picAllRight.length; i++){
      picAllRight[i].style.animationDelay = (i*.2)+'s';
    }
});
// アニメーション１

// アニメーション１　→　２
const firstRow = document.querySelectorAll('.secondAnimationFirstRowPic'),
      secondRow = document.querySelectorAll('.secondAnimationSecondRowPic');

setTimeout(function(){
  picAllRight[picAllRight.length - 1].addEventListener('animationend',function(){
    document.querySelector('.firstAnimation').style.display='none';
    document.querySelector('.secondAnimation').style.display='block';
    for (let i = 0; i < firstRow.length; i++){
      firstRow[i].classList.add('open');
      firstRow[i].style.animationDelay = (i*.2)+'s';
  }
    for (let i = 0; i < secondRow.length; i++){
      secondRow[i].classList.add('open');
      secondRow[i].style.animationDelay = (i*.2)+'s';
    }
  })
},1000);
// アニメーション１　→　２

// アニメーション２
secondRow[secondRow.length-1].addEventListener('animationend',function(){
  document.querySelector('.secondAnimation').style.display='none';
  document.querySelector('.mainMask').classList.add('open')

  if(document.querySelector('.mainMask').classList.contains('open') == true ){
    document.querySelector('.topPictureRightInnerPic').classList.add('animation')
    document.querySelector('.topPictureLeftInnerPic').classList.add('animation')
  }
})
document.querySelector('.topPictureLeftInnerPic').addEventListener('animationend',function(){
  document.getElementById('backGroundTitle').style.opacity=1;
  document.querySelector('.headerSlide').style.left=0 + '%';
})
// アニメーション２

// designスクロールアニメーション
const targetElement = document.querySelectorAll(".createFlexPic");
document.addEventListener("scroll", function() {
  console.log("画面の高さ",window.innerHeight);
  for (let i = 0; i < targetElement.length; i++){
    targetElement[i].style.transitionDelay = (i*.07)+'s';
    targetElement[i].style.animationDelay = (i*.2)+'s';
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance){
      targetElement[i].classList.add('move');
    };
    if(targetElement[i].classList.contains('move') == true){
      targetElement[i].style.transitionDelay = '';
    }
  }
})
// designスクロールアニメーション


// 作品集
const createFlexPic = document.querySelectorAll('.createFlexPic');
  for (let i = 0; i < createFlexPic.length; i++) {
    createFlexPic[i].addEventListener('mouseover',function(){
    createFlexPic[i].classList.add('large');
    createFlexPic[i].addEventListener('mouseout',function(){
    createFlexPic[i].classList.remove('large');
    });
    });
  };
  // 作品集
  
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

// モバイルメニュー
document.querySelector('.menubutton').addEventListener("click", function() {
  this.classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})
// モバイルメニュー

