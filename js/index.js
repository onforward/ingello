const swiper = new Swiper('.work-steps-swiper', {
  navigation: {
    nextEl: '.work-steps-swiper-button-next',
    prevEl: '.work-steps-swiper-button-prev',
  },
  pagination: {
    el: '.work-steps-swiper-pagination',
    clickable: true,
  },
  keyboard: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 100,
  speed: 500,
});
const reviewswiper = new Swiper('.reviews-swiper', {
  navigation: {
    nextEl: '.reviews-swiper-button-next',
    prevEl: '.reviews-swiper-button-prev',
  },
  pagination: {
    el: '.reviews-swiper-pagination',
    clickable: true,
  },
  keyboard: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  speed: 500,
  slidesPerView: 2,
  slidesPerGroup: 2,
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1
    },
    1210: {
      slidesPerGroup: 2,
      slidesPerView: 2
    }
  }
});
const projectsswiper = new Swiper('.projects-swiper', {
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
  },
  pagination: {
    el: '.projects-swiper-pagination',
    clickable: true,
  },
  keyboard: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  speed: 500,
  slidesPerView: 3,
  slidesPerGroup: 3,
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1
    },
    701: {
      slidesPerGroup: 2,
      slidesPerView: 2
    },
    1180: {
      slidesPerGroup: 3,
      slidesPerView: 3
    },
  }
});
const architectureswiper = new Swiper('.architecture-swiper', {
  navigation: {
    nextEl: '.architecture-swiper-button-next',
    prevEl: '.architecture-swiper-button-prev',
  },
  pagination: {
    el: '.architecture-swiper-pagination',
    clickable: true,
  },
  keyboard: true,
  loop: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 20,
  breakpoints: {
    0: {
      navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
    },
    570: {
      navigation: {
        nextEl: '.architecture-swiper-button-next',
        prevEl: '.architecture-swiper-button-prev',
      }
    }
  }
});
const lastswiper = new Swiper('.last-swiper', {
  navigation: {
    nextEl: '.last-swiper-button-next',
    prevEl: '.last-swiper-button-prev',
  },
  pagination: {
    el: '.last-swiper-pagination',
    clickable: true,
  },
  loop: true,
  keyboard: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 20,
  slidesPerView: 3,
  effect: "coverflow",
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3
    }
  }
});
const questionitem1Node = document.querySelector(`.question-item-1`);
const questionitem2Node = document.querySelector(`.question-item-2`);
const questionitem3Node = document.querySelector(`.question-item-3`);
const questionitem4Node = document.querySelector(`.question-item-4`);
const questionitem5Node = document.querySelector(`.question-item-5`);
const questionanswer1Node = document.querySelector(`.question-answer-1`);
const questionanswer2Node = document.querySelector(`.question-answer-2`);
const questionanswer3Node = document.querySelector(`.question-answer-3`);
const questionanswer4Node = document.querySelector(`.question-answer-4`);
const questionanswer5Node = document.querySelector(`.question-answer-5`);
const arrow1Node = document.querySelector(`.arrow-1`);
const arrow2Node = document.querySelector(`.arrow-2`);
const arrow3Node = document.querySelector(`.arrow-3`);
const arrow4Node = document.querySelector(`.arrow-4`);
const arrow5Node = document.querySelector(`.arrow-5`);
questionitem1Node.addEventListener(`click`, function () {
  questionanswer1Node.classList.toggle(`question-answer-active`);
  questionitem1Node.classList.toggle(`question-item-active`);
  arrow1Node.classList.toggle(`arrow-active`);
});
questionitem2Node.addEventListener(`click`, function () {
  questionanswer2Node.classList.toggle(`question-answer-active`);
  questionitem2Node.classList.toggle(`question-item-active`);
  arrow2Node.classList.toggle(`arrow-active`);
});
questionitem3Node.addEventListener(`click`, function () {
  questionanswer3Node.classList.toggle(`question-answer-active`);
  questionitem3Node.classList.toggle(`question-item-active`);
  arrow3Node.classList.toggle(`arrow-active`);
});
questionitem4Node.addEventListener(`click`, function () {
  questionanswer4Node.classList.toggle(`question-answer-active`);
  questionitem4Node.classList.toggle(`question-item-active`);
  arrow4Node.classList.toggle(`arrow-active`);
});
questionitem5Node.addEventListener(`click`, function () {
  questionanswer5Node.classList.toggle(`question-answer-active`);
  questionitem5Node.classList.toggle(`question-item-active`);
  arrow5Node.classList.toggle(`arrow-active`);
});
const headerburgerNode = document.querySelector(`.header-burger`);
const menuNode = document.querySelector(`.menu`);
const headerclose = document.querySelector(`.header-close`);
const menuitem1Node = document.querySelector(`#menu-item-one`);
const menuitem2Node = document.querySelector(`#menu-item-two`);
const menuitem3Node = document.querySelector(`#menu-item-three`);
const menuitem4Node = document.querySelector(`#menu-item-four`);
const menuitem5Node = document.querySelector(`#menu-item-five`);
const menuitem6Node = document.querySelector(`#menu-item-six`);
headerburgerNode.addEventListener(`click`, function () {
  menuNode.classList.add(`menu-active`);
});
headerclose.addEventListener(`click`, function () {
  menuNode.classList.remove(`menu-active`);
});
menuitem1Node.addEventListener(`click`, function () {
  if (menuNode.classList.contains(`menu-active`)) {
    menuNode.classList.remove(`menu-active`);
  }
});
menuitem2Node.addEventListener(`click`, function () {
  if (menuNode.classList.contains(`menu-active`)) {
    menuNode.classList.remove(`menu-active`);
  }
});
menuitem3Node.addEventListener(`click`, function () {
  if (menuNode.classList.contains(`menu-active`)) {
    menuNode.classList.remove(`menu-active`);
  }
});
menuitem4Node.addEventListener(`click`, function () {
  if (menuNode.classList.contains(`menu-active`)) {
    menuNode.classList.remove(`menu-active`);
  }
});
menuitem5Node.addEventListener(`click`, function () {
  if (menuNode.classList.contains(`menu-active`)) {
    menuNode.classList.remove(`menu-active`);
  }
});
menuitem6Node.addEventListener(`click`, function () {
  if (menuNode.classList.contains(`menu-active`)) {
    menuNode.classList.remove(`menu-active`);
  }
});
const bodyNode = document.querySelector(`body`);
const popupNode = document.querySelector(`#popup`);
const popupopenNode = document.querySelectorAll(`.popup-open`);
const popupcloseNode = document.querySelector(`#popup-close`);
for (let index = 0; index < popupopenNode.length; index++) {
  popupopenNode[index].addEventListener(`click`, function () {
    popupNode.classList.add(`popup-active`);
    bodyNode.classList.add(`lock`);
  });
}
popupcloseNode.addEventListener(`click`, function () {
  popupNode.classList.remove(`popup-active`);
  bodyNode.classList.remove(`lock`);
});
popupNode.addEventListener(`click`, function (e) {
  if (e.target === popupNode) {
    popupNode.classList.remove(`popup-active`);
    bodyNode.classList.remove(`lock`);
  }
});

