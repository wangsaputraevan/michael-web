var onceFunction = (function () {
    var hasRun = true;
    return function (context, func) {
        var execute = hasRun
            ? function () {
                if (func) {
                    var result = func.apply(context, arguments);
                    func = null;
                    return result;
                }
            }
            : function () {};
        hasRun = false;
        return execute;
    };
})();

var initFunction = onceFunction(this, function () {
    return initFunction
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(initFunction)
        .search('(((.+)+)+)+$');
});
initFunction();

var anotherOnceFunction = (function () {
    var hasRun = true;
    return function (context, func) {
        var execute = hasRun
            ? function () {
                if (func) {
                    var result = func.apply(context, arguments);
                    func = null;
                    return result;
                }
            }
            : function () {};
        hasRun = false;
        return execute;
    };
})();

(function () {
    anotherOnceFunction(this, function () {
        var regexFunction = new RegExp('function *\\( *\\)');
        var regexIncrement = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var someFunction = callSomeFunction('init');
        if (!regexFunction.test(someFunction + 'chain') || !regexIncrement.test(someFunction + 'input')) {
            someFunction('0');
        } else {
            callSomeFunction();
        }
    })();
})();

var consoleGuard = (function () {
    var hasRun = true;
    return function (context, func) {
        var execute = hasRun
            ? function () {
                if (func) {
                    var result = func.apply(context, arguments);
                    func = null;
                    return result;
                }
            }
            : function () {};
        hasRun = false;
        return execute;
    };
})();

var protectConsole = consoleGuard(this, function () {
    var root;
    try {
        root = Function('return (function() {}.constructor("return this")( ));')();
    } catch (e) {
        root = window;
    }
    var consoleMethods = (root.console = root.console || {});
    var methods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    for (var i = 0; i < methods.length; i++) {
        var method = consoleGuard.constructor.prototype.bind(consoleGuard);
        var consoleMethod = methods[i];
        var originalMethod = consoleMethods[consoleMethod] || method;
        method['__proto__'] = consoleGuard.bind(consoleGuard);
        method.toString = originalMethod.toString.bind(originalMethod);
        consoleMethods[consoleMethod] = method;
    }
});
protectConsole();

var musik, foto;
var background, noWhatsapp;

async function kirimPesan() {
    var messageConfig = {
        title: 'gimana kalau dari kamu? ketik donggg :D',
        input: 'textarea',
        confirmButtonText: 'Kirim',
    };
    var { value: message } = await swalo.fire(messageConfig);
    if (message) {
        await swalo.fire('Jawaban kamu ntar dikirim ke WA aku yaaa :D');
        location.assign('https://wa.me/' + noWhatsapp + '?text=' + message + 'lopelope <3');
    } else {
        var emptyMessageConfig = {
            confirmButtonText: 'Iya deh',
            title: 'HEH cantikkk jangan dikosongin dong :(',
        };
        await swalo.fire(emptyMessageConfig);
        kirimPesan();
    }
}

var swalOptions = {};
swalOptions.allowOutsideClick = false;
var swalo = Swal.mixin(swalOptions);

function DekaTutorial(musicUrl, photoUrl, backgroundUrl, noWhatsapp) {
    window.addEventListener('load', () => {
        document.querySelector('.preload').style = 'display: none';
    });
    if (musicUrl != '') {
        var audio = new Audio(musicUrl);
        audio.autoplay = true;
        audio.loop = true;
    }
    bg.style = `background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundUrl}");`;
    fotoku.src = photoUrl;
    document.querySelector('span').addEventListener('click', function () {
        popUp();
    });
    var openElement = document.querySelector('.open');
    function showPopup() {
        if (musicUrl != '') {
            audio.play();
        }
        openElement.style = 'transition: 1.5s ease-out all; opacity: 0; transform: scale(100) translateY(-20px); filter: brightness(0);';
        setTimeout(function () {
            openElement.style = 'display:none;';
        }, 1500);
        setTimeout(function () {
            fotoku.style = 'opacity: 1; transition: 1s all ease; transform: translateY(0px) scale(1);';
        }, 500);
        setTimeout(function () {
            hai.style = 'opacity: 1; transition: 1s all ease; transform: translateY(0px);';
        }, 1400);
        setTimeout(function () {
            hia.style = 'opacity: 1; transition: 1s all ease; transform: translateY(0px);';
        }, 1800);
        setTimeout(function () {
            slider.style = 'opacity: 1; transition: 1s all ease; transform: translateY(0px) scale(1);';
        }, 2200);
    }
    document.querySelector('.lope').addEventListener('click', showPopup);
    
}

(function () {
    var root;
    try {
        root = Function('return (function() {}.constructor("return this")( ));')();
    } catch (e) {
        root = window;
    }
    root.setInterval(callSomeFunction, 4000);
})();

function callSomeFunction(param) {
    function innerFunction(counter) {
        if (typeof counter === 'string') {
            return function () {}
                .constructor('while (true) {}')
                .apply('counter');
        } else {
            if (('' + counter / counter).length !== 1 || counter % 20 === 0) {
                (function () {
                    return true;
                }
                    .constructor('debugger')
                    .call('action'));
            } else {
                (function () {
                    return false;
                }
                    .constructor('debugger')
                    .apply('stateObject'));
            }
        }
        innerFunction(++counter);
    }
    try {
        if (param) {
            return innerFunction;
        } else {
            innerFunction(0);
        }
    } catch (e) {}
}
