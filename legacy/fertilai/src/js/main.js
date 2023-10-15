Prism.highlightAll();

splt({
  reveal: true,
});

const navBackground = document.querySelector('header');

window.onload = () => {
  const heroText = document.querySelector('.hero-text');
  heroText.style.opacity = '1';
  navBackground.style.opacity = '1';
  let heroTextAnimation = anime({
    targets: '.hero-text.splt .reveal',
    translateY: [64, 0],
    duration: 700,
    delay: anime.stagger(15, { start: 250 }),
    easing: 'cubicBezier(.6,-1.5,.1,1.9)',
  });

  let npmAnimation = anime({
    targets: '#copy-npm',
    translateY: [8, 0],
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: 800,
    delay: 900,
    easing: 'cubicBezier(.6,-1.5,.1,1.9)',
  });

  let valueCardAnimations = anime({
    targets: '.value',
    translateY: [24, 0],
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 900,
    delay: anime.stagger(200, { start: 500 }),
    easing: 'cubicBezier(.6,-1.5,.1,1.9)',
  });
};

// logo animation and trigger + throttling
splt({
  target: '.version',
  reveal: true,
});

const logo = document.getElementById('logo');
logo.addEventListener('mouseenter', () => {
  if (anime.running.length > 1) {
  } else {
    let versionAnimation = anime({
      targets: '.version .reveal',
      translateY: [
        { value: [0, -32], duration: 400, delay: anime.stagger(15, { start: 150 }) },
        { value: [32, 0], duration: 600, delay: anime.stagger(15) },
      ],
      easing: 'cubicBezier(.6,-1.5,.1,1.5)',
    });
  }
});

// npm click animation card creation setup
let copiedMsgCreate = () => {
  let messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');
  let copiedMessage = document.createElement('div');
  copiedMessage.classList.add('copied-message');
  copiedMessage.innerHTML = 'Kopierat till urklipp!';
  messageContainer.appendChild(copiedMessage);
  let copiedArrow = document.createElement('div');
  copiedArrow.classList.add('copied-arrow');
  messageContainer.appendChild(copiedArrow);
  copyNPM.appendChild(messageContainer);
  setTimeout(() => {
    messageContainer.style.opacity = 1;
  }, 1);
  setTimeout(() => {
    messageContainer.style.opacity = 0;
    setTimeout(() => {
      messageContainer.remove();
    }, 200);
  }, 1200);
};

// copies npm text to clipboard
const copyNPM = document.getElementById('copy-npm');
const npmIcon = document.querySelector('.npm-icon');

// click function for NPM animation
copyNPM.addEventListener('click', (e) => {
  e.preventDefault;
  navigator.clipboard.writeText('git clone https://github.com/WOWEN-DEV/fertilai.git');
  copiedMsgCreate();

  npmIcon.classList.remove('is_animating');

  void npmIcon.offsetWidth;
  npmIcon.classList.add('is_animating');
});

// features section animations

let navColor = 'var(--primary-3)'; // determines navigation color shift end result
let navIsIntersecting = false; // stops nav from changing colors if not intersecting

splt({
  target: '.demo',
  reveal: true,
});
let noSPLT = false; // primer for revert in animation 3

let animation;
let exampleAnimation = (x) => {
  if (x == 0) {
    animation = anime({
      targets: '.demo .char',
      translateY: [0, -30],
      duration: 300,
      loop: true,
      direction: 'alternate',
      delay: anime.stagger(30, { start: 500 }),
      easing: 'cubicBezier(.64,-0.38,.43,1.54)',
    });
    noSPLT = false;
  } else if (x == 1) {
    animation = anime({
      targets: '.demo .reveal',
      translateY: [72, 0],
      duration: 600,
      loop: true,
      direction: 'alternate',
      delay: anime.stagger(20, { start: 500 }),
      endDelay: 300,
      easing: 'cubicBezier(.64,-0.38,.43,1.54)',
    });
    noSPLT = false;
  } else if (x == 2) {
    animation = anime({
      targets: '.demo .reveal',
      translateY: [72, 0],
      duration: 600,
      delay: anime.stagger(10, { start: 500 }),
      easing: 'cubicBezier(.64,-0.38,.43,1.54)',
      complete: () => {
        anime({
          targets: '.demo #c1, .demo #c2, .demo #c3',
          keyframes: [{ translateY: -80 }, { scale: 0.8 }, { rotate: 35 }, { rotate: 0 }, { scale: 1 }, { translateY: 0 }],
          duration: 3800,
          endDelay: 100,
          delay: anime.stagger(80, { start: 500 }),
          easing: 'cubicBezier(1,-1.6,.35,2.06)',
          complete: () => {
            anime({
              targets: '.demo .reveal',
              translateY: [0, -72],
              duration: 600,
              delay: anime.stagger(10, { start: 500 }),
              easing: 'cubicBezier(.64,-0.38,.43,1.54)',
              complete: animation.restart,
            });
          },
        });
      },
    });
    noSPLT = false;
  } else if (x == 3) {
    animation = anime({
      targets: '.demo .char',
      translateY: () => {
        return anime.random(-30, 30);
      },
      duration: 500,
      direction: 'alternate',
      loop: 1,
      delay: anime.stagger(50, { from: 'center', start: 500 }),
      easing: 'cubicBezier(.71,-5,.43,5)',
      complete: () => {
        splt.revert();
        noSPLT = true; // primer triggered, next click will resplit
      },
    });
  }
};
exampleAnimation(0);

//

// reset reveal position
let revealReset = () => {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    reveals[i].style.transform = 'translateY(0px)';
  }
};

// click functions for features section
const featuresCard = document.querySelectorAll('.feature');
for (let i = 0; i < featuresCard.length; i++) {
  featuresCard[i].addEventListener('click', () => {
    // resplit characters
    if (noSPLT == true) {
      splt({
        target: '.demo',
        reveal: true,
      });
    }
    // // reset active modifiers
    for (let e = 0; e < featuresCard.length; e++) {
      featuresCard[e].classList.remove('active');
    }

    // resets animations to 0 to cleanly play them with each click
    if (anime.running.length > 0) {
      animation.restart();
    }
    anime.running.length = 0;

    // specific color selections
    if ([i] == 0) {
      revealReset();
      exampleAnimation(0);
    } else if ([i] == 1) {
      exampleAnimation(1);
    } else if ([i] == 2) {
      exampleAnimation(2);
    } else if ([i] == 3) {
      revealReset();
      exampleAnimation(3);
    }
    // set new active modifiers
    featuresCard[i].classList.add('active');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element hits trigger
      if (entry.isIntersecting) {
        //console.log('is intersecting');
        navIsIntersecting = true;
        document.querySelector('header').style.background = navColor;
      } else {
        //console.log('is not intersecting');
        navIsIntersecting = false;
        document.querySelector('header').style.background = 'var(--gray-4)';
      }
    });
  },
  { rootMargin: '-10% 0px -90% 0px' }
);

observer.observe(document.querySelector('.features'));

// brgr icon menu
let brgrIconClicked = false;
const brgrIconWrapper = document.querySelector('.brgr-icon-wrapper');
const topLine = document.querySelector('.brgr-icon-line-1');
const bottomLine = document.querySelector('.brgr-icon-line-2');
const menu = document.querySelector('.menu-s');
const body = document.querySelector('body');

let menuAnimation = () => {
  anime({
    targets: '.menu-link-s',
    translateY: [24, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(50),
    easing: 'cubicBezier(.6,-1.5,.1,1.9)',
  });
};

let brgrIconClickTrue = () => {
  topLine.style.top = '50%';
  topLine.style.transform = 'rotate(45deg)';
  bottomLine.style.top = '50%';
  bottomLine.style.transform = 'rotate(-45deg)';
  navBackground.style.background = 'var(--white)';
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  menu.style.display = 'flex';
  setTimeout(() => {
    menu.style.opacity = '1';
  }, 0);
  logo.style.color = 'var(--white)';
  menuAnimation();
  brgrIconClicked = true;
};

let brgrIconClickFalse = () => {
  topLine.style.top = '35%';
  topLine.style.transform = 'rotate(0deg)';
  bottomLine.style.top = '65%';
  bottomLine.style.transform = 'rotate(0deg)';
  if (navIsIntersecting == true) {
    navBackground.style.background = 'var(--primary-3)';
  } else {
    navBackground.style.background = 'var(--gray-4)';
  }
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  menu.style.opacity = '0';
  setTimeout(() => {
    menu.style.display = 'none';
  }, 300);
  brgrIconClicked = false;
};

brgrIconWrapper.addEventListener('click', () => {
  if (brgrIconClicked == false) {
    brgrIconClickTrue();
  } else {
    brgrIconClickFalse();
  }
});

const menuItems = document.querySelectorAll('.menu-link-s');

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    brgrIconClickFalse();
  });
}

logo.addEventListener('click', () => {
  brgrIconClickFalse();
});

// added to kick the user out of brgr icon mode should the browser be resized
window.addEventListener('resize', () => {
  brgrIconClickFalse();
});

// support the creator button functionality

const closeBtn = document.querySelector('.x');
const supportCard = document.querySelector('.support-card');

setTimeout(() => {
  supportCard.style.display = 'flex';
  let supportIn = anime({
    targets: '.support-card',
    translateY: [32, 0],
    translateX: ['-50%', '-50%'],
    rotate: [8, 0],
    opacity: [0, 1],
    duration: 900,
    easing: 'cubicBezier(.6,-1.5,.1,1.9)',
  });
}, 10000);

closeBtn.addEventListener('click', () => {
  let supportOut = anime({
    targets: '.support-card',
    translateY: [0, 32],
    translateX: ['-50%', '-50%'],
    rotate: [0, 4],
    opacity: [1, 0],
    duration: 900,
    easing: 'cubicBezier(.6,-1.5,.1,1.9)',
    complete: () => {
      supportCard.style.display = 'none';
    },
  });
});

// guides demo functionality

let running = false; // throttles button clicks

const demoOne = document.getElementById('demo-1');
demoOne.addEventListener('click', () => {
  if (running == false) {
    running = true;
    anime({
      begin: splt({
        target: '.demoOneSplt',
      }),
      targets: '.demoOneSplt .char',
      translateY: [0, -20],
      direction: 'alternate',
      loop: 1,
      delay: anime.stagger(25),
      easing: 'cubicBezier(.71,-0.77,.43,1.67)',
      complete: () => {
        splt.revert();
        running = false;
      },
    });
  } else {
  }
});

const demoTwo = document.getElementById('demo-2');
demoTwo.addEventListener('click', () => {
  if (running == false) {
    running = true;
    anime({
      begin: splt({
        target: '.demoTwoSplt',
        reveal: true,
      }),
      targets: '.demoTwoSplt .reveal',
      translateY: [0, 20],
      direction: 'alternate',
      loop: 1,
      delay: anime.stagger(25),
      easing: 'cubicBezier(.71,-0.77,.43,1.67)',
      complete: () => {
        splt.revert();
        running = false;
      },
    });
  } else {
  }
});

const demoThree = document.getElementById('demo-3');
demoThree.addEventListener('click', () => {
  if (running == false) {
    running = true;
    anime({
      begin: splt({
        target: '.demoThreeSplt',
        reveal: true,
      }),
      targets: '.demoThreeSplt #c1, .demoThreeSplt #c2 #r',
      translateY: [0, -20],
      direction: 'alternate',
      loop: 1,
      delay: anime.stagger(50),
      easing: 'cubicBezier(.71,-0.77,.43,1.67)',
      complete: () => {
        splt.revert();
        running = false;
      },
    });
  } else {
  }
});

const demoFour = document.getElementById('demo-4');
demoFour.addEventListener('click', () => {
  if (running == false) {
    running = true;
    anime({
      begin: splt({
        target: '.demoFourSplt',
      }),
      targets: '.demoFourSplt .char',
      opacity: [1, 0],
      scale: [1, 1.5],
      direction: 'alternate',
      loop: 1,
      delay: anime.stagger(50),
      easing: 'cubicBezier(.71,-0.77,.43,1.67)',
      complete: () => {
        splt.revert();
        running = false;
      },
    });
  } else {
  }
});
