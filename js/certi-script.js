(function(){
    
    var DOM = {
        
        title1 : document.querySelector('#gCloud'),
        name1: document.querySelector('#name1'),
        issuer1: document.querySelector('#issuer1'),
        link1: document.querySelector('#link1'),
        subc: document.querySelector('#sub-c'), 
        title2 : document.querySelector('#webD'),
        name2: document.querySelector('#name2'),
        issuer2: document.querySelector('#issuer2'),
        link2: document.querySelector('#link2'),
        certis: [ 
                    document.querySelector('#c1'),
                    document.querySelector('#c2'),
                    document.querySelector('#c3'),
                    document.querySelector('#c4'),
                    document.querySelector('#c5'),
                    document.querySelector('#c6'),
        
                ],
    };
    function init(){
        
        DOM.title1.textContent = "Google Cloud Platform: Specialization";
        DOM.name1.textContent = "Architecting with Google Compute Engine";
        DOM.issuer1.textContent = "Coursera";
        
        DOM.certis[0].textContent = "Google Cloud Platform Fundamentals: Core Infrastructure";
        DOM.certis[1].textContent = "Essential Cloud Infrastructure: Foundation";
        DOM.certis[2].textContent = "Essential Cloud Infrastructure: Core Services";
        DOM.certis[3].textContent = "Elastic Cloud Infrastructure: Scaling and Automation";
        DOM.certis[4].textContent = "Elastic Cloud Infrastructure: Containers and Services";
        DOM.certis[5].textContent = "Reliable Cloud Infrastructure: Design and Process";
        
        DOM.title2.textContent = "Web Design Fundamentals: Course";
        DOM.name2.textContent = "Web Design for Web Developers";
        DOM.issuer2.textContent = "Udemy";
        
        
    }
    
    init();
})();