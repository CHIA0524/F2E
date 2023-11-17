function pageScroll(page) {
    //移動頁面page*100vh
    let body = document.querySelector('body');
    window.scrollTo({ top: page * window.innerHeight, behavior: 'smooth' });

}