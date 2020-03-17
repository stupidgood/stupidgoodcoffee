import Turbolinks from 'turbolinks'
import Typed from 'typed.js';

const options = {
    stringsElement: '#headline-content',
    typeSpeed: 28,
    showCursor: false,
}

const typed = new Typed('#headline', options);

Turbolinks.start()
