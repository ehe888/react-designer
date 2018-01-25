export default {
  '@global': {
    '.animated': {
      animationDuration: '1s',
      animationFillMode: 'both'
    },
    '.animated.infinite': {
      animationIterationCount: 'infinite'
    },
    '.animated.hinge': {
      animationDuration: '2s'
    },
    '.animated.flipOutX, .animated.flipOutY, .animated.bounceIn, .animated.bounceOut': {
      animationDuration: '.75s'
    },
    '@keyframes bounce': {
      'from, 20%, 53%, 80%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'translate3d(0,0,0)'
      },
      '40%, 43%': {
        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
        transform: 'translate3d(0, -30px, 0)'
      },
      '70%': {
        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
        transform: 'translate3d(0, -15px, 0)'
      },
      '90%': {
        transform: 'translate3d(0,-4px,0)'
      }
    },
    '.bounce': {
      animationName: 'bounce',
      transformOrigin: 'center bottom'
    },
    '@keyframes flash': {
      'from, 50%, to': {
        opacity: '1'
      },
      '25%, 75%': {
        opacity: '0'
      }
    },
    '.flash': {
      animationName: 'flash'
    },
    '@keyframes pulse': {
      from: {
        transform: 'scale3d(1, 1, 1)'
      },
      '50%': {
        transform: 'scale3d(1.05, 1.05, 1.05)'
      },
      to: {
        transform: 'scale3d(1, 1, 1)'
      }
    },
    '.pulse': {
      animationName: 'pulse'
    },
    '@keyframes rubberBand': {
      from: {
        transform: 'scale3d(1, 1, 1)'
      },
      '30%': {
        transform: 'scale3d(1.25, 0.75, 1)'
      },
      '40%': {
        transform: 'scale3d(0.75, 1.25, 1)'
      },
      '50%': {
        transform: 'scale3d(1.15, 0.85, 1)'
      },
      '65%': {
        transform: 'scale3d(.95, 1.05, 1)'
      },
      '75%': {
        transform: 'scale3d(1.05, .95, 1)'
      },
      to: {
        transform: 'scale3d(1, 1, 1)'
      }
    },
    '.rubberBand': {
      animationName: 'rubberBand'
    },
    '@keyframes shake': {
      'from, to': {
        transform: 'translate3d(0, 0, 0)'
      },
      '10%, 30%, 50%, 70%, 90%': {
        transform: 'translate3d(-10px, 0, 0)'
      },
      '20%, 40%, 60%, 80%': {
        transform: 'translate3d(10px, 0, 0)'
      }
    },
    '.shake': {
      animationName: 'shake'
    },
    '@keyframes headShake': {
      '0%': {
        transform: 'translateX(0)'
      },
      '6.5%': {
        transform: 'translateX(-6px) rotateY(-9deg)'
      },
      '18.5%': {
        transform: 'translateX(5px) rotateY(7deg)'
      },
      '31.5%': {
        transform: 'translateX(-3px) rotateY(-5deg)'
      },
      '43.5%': {
        transform: 'translateX(2px) rotateY(3deg)'
      },
      '50%': {
        transform: 'translateX(0)'
      }
    },
    '.headShake': {
      animationTimingFunction: 'ease-in-out',
      animationName: 'headShake'
    },
    '@keyframes swing': {
      '20%': {
        transform: 'rotate3d(0, 0, 1, 15deg)'
      },
      '40%': {
        transform: 'rotate3d(0, 0, 1, -10deg)'
      },
      '60%': {
        transform: 'rotate3d(0, 0, 1, 5deg)'
      },
      '80%': {
        transform: 'rotate3d(0, 0, 1, -5deg)'
      },
      to: {
        transform: 'rotate3d(0, 0, 1, 0deg)'
      }
    },
    '.swing': {
      transformOrigin: 'top center',
      animationName: 'swing'
    },
    '@keyframes tada': {
      from: {
        transform: 'scale3d(1, 1, 1)'
      },
      '10%, 20%': {
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)'
      },
      '30%, 50%, 70%, 90%': {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
      },
      '40%, 60%, 80%': {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
      },
      to: {
        transform: 'scale3d(1, 1, 1)'
      }
    },
    '.tada': {
      animationName: 'tada'
    },
    '@keyframes wobble': {
      from: {
        transform: 'none'
      },
      '15%': {
        transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'
      },
      '30%': {
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'
      },
      '45%': {
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'
      },
      '60%': {
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'
      },
      '75%': {
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'
      },
      to: {
        transform: 'none'
      }
    },
    '.wobble': {
      animationName: 'wobble'
    },
    '@keyframes jello': {
      'from, 11.1%, to': {
        transform: 'none'
      },
      '22.2%': {
        transform: 'skewX(-12.5deg) skewY(-12.5deg)'
      },
      '33.3%': {
        transform: 'skewX(6.25deg) skewY(6.25deg)'
      },
      '44.4%': {
        transform: 'skewX(-3.125deg) skewY(-3.125deg)'
      },
      '55.5%': {
        transform: 'skewX(1.5625deg) skewY(1.5625deg)'
      },
      '66.6%': {
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'
      },
      '77.7%': {
        transform: 'skewX(0.390625deg) skewY(0.390625deg)'
      },
      '88.8%': {
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
      }
    },
    '.jello': {
      animationName: 'jello',
      transformOrigin: 'center'
    },
    '@keyframes bounceIn': {
      'from, 20%, 40%, 60%, 80%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
      },
      '0%': {
        opacity: '0',
        transform: 'scale3d(.3, .3, .3)'
      },
      '20%': {
        transform: 'scale3d(1.1, 1.1, 1.1)'
      },
      '40%': {
        transform: 'scale3d(.9, .9, .9)'
      },
      '60%': {
        opacity: '1',
        transform: 'scale3d(1.03, 1.03, 1.03)'
      },
      '80%': {
        transform: 'scale3d(.97, .97, .97)'
      },
      to: {
        opacity: '1',
        transform: 'scale3d(1, 1, 1)'
      }
    },
    '.bounceIn': {
      animationName: 'bounceIn'
    },
    '@keyframes bounceInDown': {
      'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
      },
      '0%': {
        opacity: '0',
        transform: 'translate3d(0, -3000px, 0)'
      },
      '60%': {
        opacity: '1',
        transform: 'translate3d(0, 25px, 0)'
      },
      '75%': {
        transform: 'translate3d(0, -10px, 0)'
      },
      '90%': {
        transform: 'translate3d(0, 5px, 0)'
      },
      to: {
        transform: 'none'
      }
    },
    '.bounceInDown': {
      animationName: 'bounceInDown'
    },
    '@keyframes bounceInLeft': {
      'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
      },
      '0%': {
        opacity: '0',
        transform: 'translate3d(-3000px, 0, 0)'
      },
      '60%': {
        opacity: '1',
        transform: 'translate3d(25px, 0, 0)'
      },
      '75%': {
        transform: 'translate3d(-10px, 0, 0)'
      },
      '90%': {
        transform: 'translate3d(5px, 0, 0)'
      },
      to: {
        transform: 'none'
      }
    },
    '.bounceInLeft': {
      animationName: 'bounceInLeft'
    },
    '@keyframes bounceInRight': {
      'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
      },
      from: {
        opacity: '0',
        transform: 'translate3d(3000px, 0, 0)'
      },
      '60%': {
        opacity: '1',
        transform: 'translate3d(-25px, 0, 0)'
      },
      '75%': {
        transform: 'translate3d(10px, 0, 0)'
      },
      '90%': {
        transform: 'translate3d(-5px, 0, 0)'
      },
      to: {
        transform: 'none'
      }
    },
    '.bounceInRight': {
      animationName: 'bounceInRight'
    },
    '@keyframes bounceInUp': {
      'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
      },
      from: {
        opacity: '0',
        transform: 'translate3d(0, 3000px, 0)'
      },
      '60%': {
        opacity: '1',
        transform: 'translate3d(0, -20px, 0)'
      },
      '75%': {
        transform: 'translate3d(0, 10px, 0)'
      },
      '90%': {
        transform: 'translate3d(0, -5px, 0)'
      },
      to: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    '.bounceInUp': {
      animationName: 'bounceInUp'
    },
    '@keyframes bounceOut': {
      '20%': {
        transform: 'scale3d(.9, .9, .9)'
      },
      '50%, 55%': {
        opacity: '1',
        transform: 'scale3d(1.1, 1.1, 1.1)'
      },
      to: {
        opacity: '0',
        transform: 'scale3d(.3, .3, .3)'
      }
    },
    '.bounceOut': {
      animationName: 'bounceOut'
    },
    '@keyframes bounceOutDown': {
      '20%': {
        transform: 'translate3d(0, 10px, 0)'
      },
      '40%, 45%': {
        opacity: '1',
        transform: 'translate3d(0, -20px, 0)'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(0, 2000px, 0)'
      }
    },
    '.bounceOutDown': {
      animationName: 'bounceOutDown'
    },
    '@keyframes bounceOutLeft': {
      '20%': {
        opacity: '1',
        transform: 'translate3d(20px, 0, 0)'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(-2000px, 0, 0)'
      }
    },
    '.bounceOutLeft': {
      animationName: 'bounceOutLeft'
    },
    '@keyframes bounceOutRight': {
      '20%': {
        opacity: '1',
        transform: 'translate3d(-20px, 0, 0)'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(2000px, 0, 0)'
      }
    },
    '.bounceOutRight': {
      animationName: 'bounceOutRight'
    },
    '@keyframes bounceOutUp': {
      '20%': {
        transform: 'translate3d(0, -10px, 0)'
      },
      '40%, 45%': {
        opacity: '1',
        transform: 'translate3d(0, 20px, 0)'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(0, -2000px, 0)'
      }
    },
    '.bounceOutUp': {
      animationName: 'bounceOutUp'
    },
    '@keyframes fadeIn': {
      from: {
        opacity: '0'
      },
      to: {
        opacity: '1'
      }
    },
    '.fadeIn': {
      animationName: 'fadeIn'
    },
    '@keyframes fadeInDown': {
      from: {
        opacity: '0',
        transform: 'translate3d(0, -100%, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInDown': {
      animationName: 'fadeInDown'
    },
    '@keyframes fadeInDownBig': {
      from: {
        opacity: '0',
        transform: 'translate3d(0, -2000px, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInDownBig': {
      animationName: 'fadeInDownBig'
    },
    '@keyframes fadeInLeft': {
      from: {
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInLeft': {
      animationName: 'fadeInLeft'
    },
    '@keyframes fadeInLeftBig': {
      from: {
        opacity: '0',
        transform: 'translate3d(-2000px, 0, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInLeftBig': {
      animationName: 'fadeInLeftBig'
    },
    '@keyframes fadeInRight': {
      from: {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInRight': {
      animationName: 'fadeInRight'
    },
    '@keyframes fadeInRightBig': {
      from: {
        opacity: '0',
        transform: 'translate3d(2000px, 0, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInRightBig': {
      animationName: 'fadeInRightBig'
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: '0',
        transform: 'translate3d(0, 100%, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInUp': {
      animationName: 'fadeInUp'
    },
    '@keyframes fadeInUpBig': {
      from: {
        opacity: '0',
        transform: 'translate3d(0, 2000px, 0)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.fadeInUpBig': {
      animationName: 'fadeInUpBig'
    },
    '@keyframes fadeOut': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0'
      }
    },
    '.fadeOut': {
      animationName: 'fadeOut'
    },
    '@keyframes fadeOutDown': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(0, 100%, 0)'
      }
    },
    '.fadeOutDown': {
      animationName: 'fadeOutDown'
    },
    '@keyframes fadeOutDownBig': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(0, 2000px, 0)'
      }
    },
    '.fadeOutDownBig': {
      animationName: 'fadeOutDownBig'
    },
    '@keyframes fadeOutLeft': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0)'
      }
    },
    '.fadeOutLeft': {
      animationName: 'fadeOutLeft'
    },
    '@keyframes fadeOutLeftBig': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(-2000px, 0, 0)'
      }
    },
    '.fadeOutLeftBig': {
      animationName: 'fadeOutLeftBig'
    },
    '@keyframes fadeOutRight': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0)'
      }
    },
    '.fadeOutRight': {
      animationName: 'fadeOutRight'
    },
    '@keyframes fadeOutRightBig': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(2000px, 0, 0)'
      }
    },
    '.fadeOutRightBig': {
      animationName: 'fadeOutRightBig'
    },
    '@keyframes fadeOutUp': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(0, -100%, 0)'
      }
    },
    '.fadeOutUp': {
      animationName: 'fadeOutUp'
    },
    '@keyframes fadeOutUpBig': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(0, -2000px, 0)'
      }
    },
    '.fadeOutUpBig': {
      animationName: 'fadeOutUpBig'
    },
    '@keyframes flip': {
      from: {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
        animationTimingFunction: 'ease-out'
      },
      '40%': {
        transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
        animationTimingFunction: 'ease-out'
      },
      '50%': {
        transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
        animationTimingFunction: 'ease-in'
      },
      '80%': {
        transform: 'perspective(400px) scale3d(.95, .95, .95)',
        animationTimingFunction: 'ease-in'
      },
      to: {
        transform: 'perspective(400px)',
        animationTimingFunction: 'ease-in'
      }
    },
    '.animated.flip': {
      webkitBackfaceVisibility: 'visible',
      backfaceVisibility: 'visible',
      animationName: 'flip'
    },
    '@keyframes flipInX': {
      from: {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        animationTimingFunction: 'ease-in',
        opacity: '0'
      },
      '40%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        animationTimingFunction: 'ease-in'
      },
      '60%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
        opacity: '1'
      },
      '80%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)'
      },
      to: {
        transform: 'perspective(400px)'
      }
    },
    '.flipInX': {
      webkitBackfaceVisibility: 'visible !important',
      backfaceVisibility: 'visible !important',
      animationName: 'flipInX'
    },
    '@keyframes flipInY': {
      from: {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        animationTimingFunction: 'ease-in',
        opacity: '0'
      },
      '40%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
        animationTimingFunction: 'ease-in'
      },
      '60%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
        opacity: '1'
      },
      '80%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)'
      },
      to: {
        transform: 'perspective(400px)'
      }
    },
    '.flipInY': {
      webkitBackfaceVisibility: 'visible !important',
      backfaceVisibility: 'visible !important',
      animationName: 'flipInY'
    },
    '@keyframes flipOutX': {
      from: {
        transform: 'perspective(400px)'
      },
      '30%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        opacity: '1'
      },
      to: {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        opacity: '0'
      }
    },
    '.flipOutX': {
      animationName: 'flipOutX',
      webkitBackfaceVisibility: 'visible !important',
      backfaceVisibility: 'visible !important'
    },
    '@keyframes flipOutY': {
      from: {
        transform: 'perspective(400px)'
      },
      '30%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
        opacity: '1'
      },
      to: {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        opacity: '0'
      }
    },
    '.flipOutY': {
      webkitBackfaceVisibility: 'visible !important',
      backfaceVisibility: 'visible !important',
      animationName: 'flipOutY'
    },
    '@keyframes lightSpeedIn': {
      from: {
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        opacity: '0'
      },
      '60%': {
        transform: 'skewX(20deg)',
        opacity: '1'
      },
      '80%': {
        transform: 'skewX(-5deg)',
        opacity: '1'
      },
      to: {
        transform: 'none',
        opacity: '1'
      }
    },
    '.lightSpeedIn': {
      animationName: 'lightSpeedIn',
      animationTimingFunction: 'ease-out'
    },
    '@keyframes lightSpeedOut': {
      from: {
        opacity: '1'
      },
      to: {
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        opacity: '0'
      }
    },
    '.lightSpeedOut': {
      animationName: 'lightSpeedOut',
      animationTimingFunction: 'ease-in'
    },
    '@keyframes rotateIn': {
      from: {
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 1, -200deg)',
        opacity: '0'
      },
      to: {
        transformOrigin: 'center',
        transform: 'none',
        opacity: '1'
      }
    },
    '.rotateIn': {
      animationName: 'rotateIn'
    },
    '@keyframes rotateInDownLeft': {
      from: {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0'
      },
      to: {
        transformOrigin: 'left bottom',
        transform: 'none',
        opacity: '1'
      }
    },
    '.rotateInDownLeft': {
      animationName: 'rotateInDownLeft'
    },
    '@keyframes rotateInDownRight': {
      from: {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0'
      },
      to: {
        transformOrigin: 'right bottom',
        transform: 'none',
        opacity: '1'
      }
    },
    '.rotateInDownRight': {
      animationName: 'rotateInDownRight'
    },
    '@keyframes rotateInUpLeft': {
      from: {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0'
      },
      to: {
        transformOrigin: 'left bottom',
        transform: 'none',
        opacity: '1'
      }
    },
    '.rotateInUpLeft': {
      animationName: 'rotateInUpLeft'
    },
    '@keyframes rotateInUpRight': {
      from: {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, -90deg)',
        opacity: '0'
      },
      to: {
        transformOrigin: 'right bottom',
        transform: 'none',
        opacity: '1'
      }
    },
    '.rotateInUpRight': {
      animationName: 'rotateInUpRight'
    },
    '@keyframes rotateOut': {
      from: {
        transformOrigin: 'center',
        opacity: '1'
      },
      to: {
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 1, 200deg)',
        opacity: '0'
      }
    },
    '.rotateOut': {
      animationName: 'rotateOut'
    },
    '@keyframes rotateOutDownLeft': {
      from: {
        transformOrigin: 'left bottom',
        opacity: '1'
      },
      to: {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0'
      }
    },
    '.rotateOutDownLeft': {
      animationName: 'rotateOutDownLeft'
    },
    '@keyframes rotateOutDownRight': {
      from: {
        transformOrigin: 'right bottom',
        opacity: '1'
      },
      to: {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0'
      }
    },
    '.rotateOutDownRight': {
      animationName: 'rotateOutDownRight'
    },
    '@keyframes rotateOutUpLeft': {
      from: {
        transformOrigin: 'left bottom',
        opacity: '1'
      },
      to: {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0'
      }
    },
    '.rotateOutUpLeft': {
      animationName: 'rotateOutUpLeft'
    },
    '@keyframes rotateOutUpRight': {
      from: {
        transformOrigin: 'right bottom',
        opacity: '1'
      },
      to: {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, 90deg)',
        opacity: '0'
      }
    },
    '.rotateOutUpRight': {
      animationName: 'rotateOutUpRight'
    },
    '@keyframes hinge': {
      '0%': {
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out'
      },
      '20%, 60%': {
        transform: 'rotate3d(0, 0, 1, 80deg)',
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out'
      },
      '40%, 80%': {
        transform: 'rotate3d(0, 0, 1, 60deg)',
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out',
        opacity: '1'
      },
      to: {
        transform: 'translate3d(0, 700px, 0)',
        opacity: '0'
      }
    },
    '.hinge': {
      animationName: 'hinge'
    },
    '@keyframes jackInTheBox': {
      from: {
        opacity: '0',
        transform: 'scale(0.1) rotate(30deg)',
        transformOrigin: 'center bottom'
      },
      '50%': {
        transform: 'rotate(-10deg)'
      },
      '70%': {
        transform: 'rotate(3deg)'
      },
      to: {
        opacity: '1',
        transform: 'scale(1)'
      }
    },
    '.jackInTheBox': {
      animationName: 'jackInTheBox'
    },
    '@keyframes rollIn': {
      from: {
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)'
      },
      to: {
        opacity: '1',
        transform: 'none'
      }
    },
    '.rollIn': {
      animationName: 'rollIn'
    },
    '@keyframes rollOut': {
      from: {
        opacity: '1'
      },
      to: {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)'
      }
    },
    '.rollOut': {
      animationName: 'rollOut'
    },
    '@keyframes zoomIn': {
      from: {
        opacity: '0',
        transform: 'scale3d(.3, .3, .3)'
      },
      '50%': {
        opacity: '1'
      }
    },
    '.zoomIn': {
      animationName: 'zoomIn'
    },
    '@keyframes zoomInDown': {
      from: {
        opacity: '0',
        transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
      },
      '60%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
      }
    },
    '.zoomInDown': {
      animationName: 'zoomInDown'
    },
    '@keyframes zoomInLeft': {
      from: {
        opacity: '0',
        transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
      },
      '60%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
      }
    },
    '.zoomInLeft': {
      animationName: 'zoomInLeft'
    },
    '@keyframes zoomInRight': {
      from: {
        opacity: '0',
        transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
      },
      '60%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
      }
    },
    '.zoomInRight': {
      animationName: 'zoomInRight'
    },
    '@keyframes zoomInUp': {
      from: {
        opacity: '0',
        transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
      },
      '60%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
      }
    },
    '.zoomInUp': {
      animationName: 'zoomInUp'
    },
    '@keyframes zoomOut': {
      from: {
        opacity: '1'
      },
      '50%': {
        opacity: '0',
        transform: 'scale3d(.3, .3, .3)'
      },
      to: {
        opacity: '0'
      }
    },
    '.zoomOut': {
      animationName: 'zoomOut'
    },
    '@keyframes zoomOutDown': {
      '40%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
      },
      to: {
        opacity: '0',
        transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)',
        transformOrigin: 'center bottom',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
      }
    },
    '.zoomOutDown': {
      animationName: 'zoomOutDown'
    },
    '@keyframes zoomOutLeft': {
      '40%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)'
      },
      to: {
        opacity: '0',
        transform: 'scale(.1) translate3d(-2000px, 0, 0)',
        transformOrigin: 'left center'
      }
    },
    '.zoomOutLeft': {
      animationName: 'zoomOutLeft'
    },
    '@keyframes zoomOutRight': {
      '40%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)'
      },
      to: {
        opacity: '0',
        transform: 'scale(.1) translate3d(2000px, 0, 0)',
        transformOrigin: 'right center'
      }
    },
    '.zoomOutRight': {
      animationName: 'zoomOutRight'
    },
    '@keyframes zoomOutUp': {
      '40%': {
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
      },
      to: {
        opacity: '0',
        transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)',
        transformOrigin: 'center bottom',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
      }
    },
    '.zoomOutUp': {
      animationName: 'zoomOutUp'
    },
    '@keyframes slideInDown': {
      from: {
        transform: 'translate3d(0, -100%, 0)',
        visibility: 'visible'
      },
      to: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    '.slideInDown': {
      animationName: 'slideInDown'
    },
    '@keyframes slideInLeft': {
      from: {
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'visible'
      },
      to: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    '.slideInLeft': {
      animationName: 'slideInLeft'
    },
    '@keyframes slideInRight': {
      from: {
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'visible'
      },
      to: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    '.slideInRight': {
      animationName: 'slideInRight'
    },
    '@keyframes slideInUp': {
      from: {
        transform: 'translate3d(0, 100%, 0)',
        visibility: 'visible'
      },
      to: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    '.slideInUp': {
      animationName: 'slideInUp'
    },
    '@keyframes slideOutDown': {
      from: {
        transform: 'translate3d(0, 0, 0)'
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(0, 100%, 0)'
      }
    },
    '.slideOutDown': {
      animationName: 'slideOutDown'
    },
    '@keyframes slideOutLeft': {
      from: {
        transform: 'translate3d(0, 0, 0)'
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(-100%, 0, 0)'
      }
    },
    '.slideOutLeft': {
      animationName: 'slideOutLeft'
    },
    '@keyframes slideOutRight': {
      from: {
        transform: 'translate3d(0, 0, 0)'
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(100%, 0, 0)'
      }
    },
    '.slideOutRight': {
      animationName: 'slideOutRight'
    },
    '@keyframes slideOutUp': {
      from: {
        transform: 'translate3d(0, 0, 0)'
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(0, -100%, 0)'
      }
    },
    '.slideOutUp': {
      animationName: 'slideOutUp'
    }
  }
};
