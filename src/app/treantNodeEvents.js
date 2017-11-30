function hasClass(elem, className) {
    return elem.className.toString().split(' ').indexOf(className) > -1;
}

export default function assignListener() {
    document.addEventListener('click', function (e) {

        if(e.target !== null) {
            if (hasClass(e.target, 'big-commpany')) {
                console.log("big-commpany have been clicked!");
            }
        }

    }, false);
}

