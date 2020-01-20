(function(){
    
    var DOM = {
        
        title1: document.querySelector('#title1'),
        issuer1: document.querySelector('#issuer1'),
        year1: document.querySelector('#year1'),
        
        title2: document.querySelector('#title2'),
        issuer2: document.querySelector('#issuer2'),
        year2: document.querySelector('#year2')
        
    }
    
    function init()
    {
        DOM.title1.textContent = "Certificate of Excellence";
        DOM.issuer1.textContent = "Shree dewang mehta it awards";
        DOM.year1.textContent = "2017";
        
        DOM.title2.textContent = "Certificate of Merit";
        DOM.issuer2.textContent = "Bits edu campus";
        DOM.year2.textContent = "2016-17";
    }
    
    init();
    
})();