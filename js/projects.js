(function(){
    
    var DOM = {
        
        pr1: document.querySelector('#pr1'),
        desc1: document.querySelector('#desc1'),
        link1: document.querySelector('#link1'), 
        end: document.querySelector('.end-note')
        
    }
    
    function init(){
        
        DOM.pr1.textContent = "Portfolio";
        DOM.desc1.textContent = "A website build majorly with HTML and CSS accompanied by a little Javascript code.";
        DOM.link1.textContent = "This-one"
        DOM.end.textContent = "Many more to be added...";
        
    }
    
    init();
    
})();