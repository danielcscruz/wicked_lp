document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const lyrics = document.querySelectorAll('[data-tab-id]');



    for(i=0 ; i< buttons.length ; i++){
        buttons[i].addEventListener('click', function(button){
            const tabId = button.target.getAttribute('data-tab-button');
            const tab = document.querySelector(`[data-tab-id="${tabId}"]`);
            hideAllTabs(lyrics);
            tab.classList.add("songs__container__lyrics__song--is-active");
            deactivateButton(buttons);
            button.target.classList.add("btn-tab--is-active");             
        })

    }
})

function hideAllTabs(l){
    for (let i = 0; i < l.length; i++){
        l[i].classList.remove('songs__container__lyrics__song--is-active');
    }
}

function deactivateButton(b){
    for (let i = 0; i < b.length; i++){
        b[i].classList.remove('btn-tab--is-active');
    }
}
