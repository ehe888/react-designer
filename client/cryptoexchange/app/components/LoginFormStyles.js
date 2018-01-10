
const emailBgImg = require('../assets/img/pic_fillemail.png')
const passwordBgImg =  require('../assets/img/pic_pwd.png')
const inputWidth = 304

export default {
    input: {
        paddingLeft: '40px',
        paddingRight: '10px',
        width: `${inputWidth}px`,
        backgroundRepeat: 'no-repeat'
    },
    email: {
        backgroundImage: `url(${emailBgImg})`,
        backgroundPosition: '11px 13px',
    },
    password: {
        backgroundImage: `url(${passwordBgImg})`,
        backgroundPosition: '11px 10px',
    },
    submit: {
      padding: '.5em .6em',
      width: `${inputWidth}px`,
      border: 'solid 1px #ddd', 
    },
    buttonSubmitting: {
      backgroundColor: '#ddd'
    }
}