(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _isMobile = require("./modules/isMobile");

var _initialVariables = require("./modules/initialVariables");

var _activeMenu = require("./modules/active-menu");

var _loading = require("./modules/loading");

var _scroll = require("./modules/scroll");

// import $ from 'jquery';
(0, _isMobile.setMobileClass)(_initialVariables.dd, 'mobile', 'ipadPro', 'desktop');
(0, _initialVariables.cssScrollBarWidth)();
(0, _initialVariables.itemSkillWidth)();
addEventListener('resize', function () {
  (0, _initialVariables.cssScrollBarWidth)();
  (0, _isMobile.setMobileClass)(_initialVariables.dd, 'mobile', 'ipadPro', 'desktop');
  (0, _initialVariables.itemSkillWidth)();
});
var loadingEle = (0, _initialVariables.id)('loading');
var menu = (0, _initialVariables.id)('main-nav'); // const newMenu = menu ? menu.cloneNode(true) : null;

var social = (0, _initialVariables.q)('.social-network'); // const newSocial = social ? social.cloneNode(true) : null;

var toggleMenu = (0, _initialVariables.id)('toggleMenu');
addEventListener('DOMContentLoaded', function () {
  loadingEle ? (0, _loading.loading)(loadingEle) : null;

  if ((0, _isMobile.verifyMobile)()) {
    menu.style.display = 'none';
    social.style.display = 'none';
  }

  toggleMenu.addEventListener('click', function (e) {
    (0, _activeMenu.activeMenu)(this, menu, social, (0, _isMobile.verifyMobile)());
  });
  (0, _scroll.scrrollEvent)('main-header');
  carouselStart('.owl-carousel');
});

var carouselStart = function carouselStart(ele) {
  $(ele).owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
};

},{"./modules/active-menu":2,"./modules/initialVariables":3,"./modules/isMobile":4,"./modules/loading":5,"./modules/scroll":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeMenu = void 0;

var _svg = require("./svg");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var d = document,
    w = window,
    c = console;
var linkWhatsapp = '#',
    linkMail = 'hola@nh-digital.site';
var a;

var activeMenu = function activeMenu(toggle, nav, social, isMobile) {
  var newMenu = nav.querySelector('ul').cloneNode(true);
  var newSocial = social.querySelector('ul').cloneNode(true); // const menu = nav.querySelector('ul');
  // const socialUl = social.querySelector('ul');

  toggle.classList.add('opacity');
  menuFullScreen(newClass(newMenu, 'menu-fullscreen'), newClass(newSocial, 'social-fullscreen-right'), toggle, isMobile); // c.log(newClass(socialUl, 'social-fullscreen'));
};

exports.activeMenu = activeMenu;

var newClass = function newClass(el, classNameNew) {
  el.className = classNameNew;
  el.id = classNameNew;

  var items = _toConsumableArray(el.querySelectorAll('li'));

  items.map(function (el) {
    el.className = "".concat(classNameNew, "__item");
    el.querySelector('a').className = "".concat(classNameNew, "__link");
  });
  return el;
};

var contactDataTitle = function contactDataTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Contacto';
  var titleEle = d.createElement('h3');
  titleEle.className = 'contact-data-title';
  titleEle.innerText = title;
  return titleEle;
};

var contactData = function contactData() {
  var ele = d.createElement('ul');
  ele.classList = 'modalContactData';
  ele.id = 'modalContactData';
  ele.innerHTML = "\n    <li><a href=\"".concat(linkWhatsapp, "\" class=\"modalFullscreenMail\">\n      33 13 04 86 91\n    </a></li>\n    <li><a href=\"mailto:").concat(linkMail, "\" class=\"modalFullscreenMail\">\n      ").concat(linkMail, "\n    </a></li>");
  return ele;
};

var menuFullScreen = function menuFullScreen(menu, social, toggle, mobile) {
  var modal = d.createElement('div');
  modal.className = 'modal';
  modal.id = 'modal';
  modal.innerHTML = "\n    <div class=\"toggle close\">\n      <div class=\"toggle-menu modal__close\" id=\"modalClose\"><span class=\"span span1\"></span><span class=\"span span2\"></span></div>\n    </div>\n    <aside class=\"shape shape-left\" id=\"shapeModalLeft\"></aside>\n    <aside class=\"shape shape-right\" id=\"shapeModalRight\"></aside>\n  ";
  var shapeModalLeft = modal.querySelector('#shapeModalLeft');
  var shapeModalRight = modal.querySelector('#shapeModalRight');
  shapeModalLeft.appendChild(menu);
  var shapeModalRightContainer = d.createElement('div');

  if (!mobile) {
    shapeModalRightContainer.className = 'shapeModalRightContainer';
    shapeModalRightContainer.appendChild(contactDataTitle());
    shapeModalRightContainer.appendChild(contactData());
    shapeModalRightContainer.appendChild(social);
    shapeModalRight.appendChild(shapeModalRightContainer);
  } else {
    shapeModalRightContainer.className = 'shapeModalContainer';
    shapeModalRightContainer.appendChild(menu); // shapeModalRightContainer.appendChild(social);

    shapeModalLeft.appendChild(shapeModalRightContainer);
  }

  d.body.appendChild(modal);
  modal.addEventListener('click', function (e) {
    c.log(e.target);
    var t = e.target;

    if (t.classList.contains('close') || t.classList.contains('modal__close') || t.nodeName === 'SPAN') {
      modal.classList.add('opacity');
      toggle.classList.remove('opacity');
      shapeModalRight.innerHTML = '';
      shapeModalLeft.innerHTML = '';
      setTimeout(function () {
        modal.remove();
      }, 500);
    }
  });
  addEventListener('click', function (e) {
    var t = e.target;

    if (t.classList.contains('menu-fullscreen__link')) {
      modal.querySelector('.modal__close').click();
    }
  });
};

},{"./svg":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemSkillWidth = exports.cssScrollBarWidth = exports.body = exports.all = exports.q = exports.id = exports.dd = exports.dir = exports.log = exports.c = exports.w = exports.d = void 0;
var d = document,
    w = window,
    c = console,
    log = console.log,
    dir = console.dir,
    dd = document.documentElement,
    id = document.getElementById.bind(document),
    q = document.querySelector.bind(document),
    all = document.querySelectorAll.bind(document),
    body = document.body;
exports.body = body;
exports.all = all;
exports.q = q;
exports.id = id;
exports.dd = dd;
exports.dir = dir;
exports.log = log;
exports.c = c;
exports.w = w;
exports.d = d;

var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.getBoundingClientRect().width;
}; // funcion para asignar ese valor a una variable css


var cssScrollBarWidth = function cssScrollBarWidth() {
  return (// console.log(`${getScrollBarWidth() + 16}px`)
    dd.style.setProperty('--scrollbar', "".concat(getScrollBarWidth(), "px"))
  );
};

exports.cssScrollBarWidth = cssScrollBarWidth;

var itemSkillWidth = function itemSkillWidth() {
  var skillEle = q('.skill-item');
  var skillEleWidth = skillEle.clientWidth;
  c.log(skillEleWidth);
  dd.style.setProperty('--item-skill-width', "".concat(skillEleWidth, "px"));
};

exports.itemSkillWidth = itemSkillWidth;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMobileClass = exports.verifyMobile = exports.isMobile = void 0;
var isMobile = {
  mobilecheck: function mobilecheck() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
};
exports.isMobile = isMobile;

var verifyMobile = function verifyMobile() {
  return isMobile.mobilecheck();
};

exports.verifyMobile = verifyMobile;

var setMobileClass = function setMobileClass(ele, classNameMobile, classNameIpad, classNameDesktop) {
  if (verifyMobile()) {
    if (window.innerWidth > 1000) {
      ele.classList.add(classNameIpad);
      ele.classList.remove(classNameMobile);
      ele.classList.remove(classNameDesktop);
    } else {
      ele.classList.add(classNameMobile);
      ele.classList.remove(classNameDesktop);
      ele.classList.remove(classNameIpad);
    }
  } else {
    ele.classList.remove(classNameMobile);
    ele.classList.add(classNameDesktop);
    ele.classList.remove(classNameIpad);
  }
};

exports.setMobileClass = setMobileClass;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = void 0;

var _initialVariables = require("./initialVariables");

var loading = function loading(loadingEle) {
  loadingEle.classList.add('hidden');
  setTimeout(function () {
    loadingEle.remove();
  }, 500);
};

exports.loading = loading;

},{"./initialVariables":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrrollEvent = void 0;

var _initialVariables = require("./initialVariables");

var scrrollEvent = function scrrollEvent(header) {
  var windowHeight = _initialVariables.w.innerHeight;
  var headerElement = (0, _initialVariables.id)(header);
  var headerHeight = headerElement.clientHeight;
  var headerHeightVariable = parseFloat(getComputedStyle(_initialVariables.dd).getPropertyValue('--header-height'));

  _initialVariables.w.addEventListener('scroll', function (e) {
    var scroll = _initialVariables.w.pageYOffset;

    if (scroll >= windowHeight - headerHeight) {
      headerElement.classList.add('fixed');

      _initialVariables.dd.style.setProperty('--header-height', "".concat(headerHeightVariable * 0.75, "rem"));
    } else {
      headerElement.classList.remove('fixed');

      _initialVariables.dd.style.setProperty('--header-height', "".concat(headerHeightVariable, "rem"));
    }
  });
};

exports.scrrollEvent = scrrollEvent;

},{"./initialVariables":3}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.envelope = exports.whatsapp = void 0;
var whatsapp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.82 29.78"><defs><style>.cls-1{fill:var(--color-icon);fill-rule:evenodd;}</style></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M29.8,14.14A14.62,14.62,0,0,0,.58,13.87a4.29,4.29,0,0,0,0,.63A14.5,14.5,0,0,0,2.65,22L0,29.78l8.11-2.56A14.78,14.78,0,0,0,15.18,29,14.57,14.57,0,0,0,29.82,14.5c0-.13,0-.23,0-.36Zm-7.92,3.3c-.37-.18-2.11-1.05-2.44-1.18s-.58-.18-.82.19a15.83,15.83,0,0,1-1.13,1.38c-.21.25-.42.27-.76.11a9.13,9.13,0,0,1-2.9-1.78,10.4,10.4,0,0,1-2-2.44c-.19-.39,0-.55.15-.76a4.86,4.86,0,0,0,.55-.61,1,1,0,0,0,.12-.16,3.42,3.42,0,0,0,.23-.42.57.57,0,0,0,0-.62c-.07-.18-.79-2-1.1-2.65s-.6-.6-.79-.6-.46,0-.7,0a1.23,1.23,0,0,0-.95.45A3.84,3.84,0,0,0,8,11.3a3.68,3.68,0,0,0,.21,1.19A8.11,8.11,0,0,0,9.5,15c.18.24,2.48,3.94,6.13,5.36s3.67.94,4.31.89a3.57,3.57,0,0,0,2.43-1.7,2.85,2.85,0,0,0,.19-1.69,1.86,1.86,0,0,0-.68-.39Zm-6.7,9.27a12.25,12.25,0,0,1-6.76-2L3.7,26.2l1.52-4.54A12.12,12.12,0,0,1,2.88,14.5a9.23,9.23,0,0,1,.06-1.18,12.31,12.31,0,0,1,24.5.22c0,.33,0,.65,0,1A12.27,12.27,0,0,1,15.18,26.71Z" /></g></g></svg>';
exports.whatsapp = whatsapp;
var envelope = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.63 401.99"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path d="M49.11,123.91q9.7,6.85,58.52,40.68t74.81,52.1q2.85,2,12.13,8.71T210,236.25q6.15,4.14,14.85,9.28a86.11,86.11,0,0,0,16.42,7.7,45.2,45.2,0,0,0,14.28,2.57h.57a45.2,45.2,0,0,0,14.28-2.57,85.77,85.77,0,0,0,16.41-7.7q8.71-5.15,14.85-9.28t15.42-10.85q9.27-6.71,12.13-8.71,26.26-18.27,133.62-92.79a135.59,135.59,0,0,0,34.82-35.11q14-20.55,14-43.11a43.76,43.76,0,0,0-13.57-32.26Q484.5,0,465.94,0H45.68q-22,0-33.83,14.84T0,52q0,18,15.7,39T49.11,123.91Z"/><path d="M483.07,154.45Q389.44,217.84,340.89,253q-16.26,12-26.4,18.7t-27,13.7q-16.85,7-31.41,7h-.57q-14.57,0-31.41-7t-27-13.7Q187,265,170.73,253,132.2,224.69,28.84,154.45A151.31,151.31,0,0,1,0,129.62V356.3a44,44,0,0,0,13.42,32.27A44,44,0,0,0,45.68,402H466a45.82,45.82,0,0,0,45.68-45.69V129.62A157.44,157.44,0,0,1,483.07,154.45Z"/></g></g></svg>';
exports.envelope = envelope;

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
