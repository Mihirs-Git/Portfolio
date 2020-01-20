(function(){
    
    var DOM = {
        
        header: document.querySelector(".header"),
        photo: document.querySelector(".photo"),
        name: document.querySelector(".name"),
        tabs: document.querySelector(".tabs"),
        desc: document.querySelector(".desc"),
        edu: document.querySelector("#edu"),
        contact: document.querySelector("#contact"),
        certi: document.querySelector("#certi"),
        achieve: document.querySelector("#achieve"),
        project: document.querySelector("#project"),
        frame: document.querySelector('.sub-desc'),
        time: document.querySelector('.time'),
        date: document.querySelector('.date')
    }

    setInterval(function(){
            var d = new Date();
            DOM.time.textContent = ('0' + d.getHours()).slice(-2) + ' : ' + ('0' + d.getMinutes()).slice(-2) + ' : ' + ('0' + d.getSeconds()).slice(-2); 
        },1000);
    
    var init = function(){
    
        var d = new Date();
        DOM.name.textContent = 'Mihir Parmar';
        DOM.date.textContent = ('0' + d.getDate()).slice(-2) + ' / ' + ('0' + (d.getMonth()+1)).slice(-2) + ' / ' + d.getFullYear();
        DOM.edu.textContent = 'education';
        DOM.contact.textContent = 'links';
        DOM.certi.textContent = 'certifications';
        DOM.achieve.textContent = 'achievements';
        DOM.project.textContent = 'Projects';
    };
    
    
    DOM.edu.addEventListener('click',function(){
        
        DOM.edu.classList.add('active');
        DOM.contact.classList.remove('active');
        DOM.certi.classList.remove('active');
        DOM.achieve.classList.remove('active');
        DOM.project.classList.remove('active');
        
        DOM.frame.src = "education.html";
   
    });
    
    DOM.certi.addEventListener('click',function(){
        
        DOM.certi.classList.add('active');
        DOM.contact.classList.remove('active');
        DOM.edu.classList.remove('active');
        DOM.achieve.classList.remove('active');
        DOM.project.classList.remove('active');
        
        DOM.frame.src = "certification.html";
   
    });
    
    DOM.achieve.addEventListener('click',function(){
        
        DOM.achieve.classList.add('active');
        DOM.contact.classList.remove('active');
        DOM.certi.classList.remove('active');
        DOM.edu.classList.remove('active');
        DOM.project.classList.remove('active');
        
        DOM.frame.src = "achieve.html";
   
    });
    
    DOM.project.addEventListener('click',function(){
        
        DOM.project.classList.add('active');
        DOM.contact.classList.remove('active');
        DOM.certi.classList.remove('active');
        DOM.achieve.classList.remove('active');
        DOM.edu.classList.remove('active');
        
        DOM.frame.src = "projects.html";
   
    });
    
    DOM.contact.addEventListener('click',function(){
        
        DOM.contact.classList.add('active');
        DOM.edu.classList.remove('active');
        DOM.certi.classList.remove('active');
        DOM.achieve.classList.remove('active');
        DOM.project.classList.remove('active');
        
        DOM.frame.src = "contact.html";
   
    });
    
    init();
})();