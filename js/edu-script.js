(function(){
    
    var DOM = {
        
        be : document.querySelector('#be'),
        clg_name: document.querySelector('#clg-name'),
        be_year: document.querySelector('#be-year'),
        cpi: document.querySelector('#cpi'),
        cgpa: document.querySelector('#cgpa'),
        be_info : document.querySelector('#be-details'), 
        ssc_name : document.querySelector('#ssc-name'),
        hsc_name : document.querySelector('#hsc-name'),
        hsc : document.querySelector('#hsc'),
        hsc_year : document.querySelector('#hsc-year'),
        hsc_percent : document.querySelector('#hsc-percent'),
        hsc_info: document.querySelector('#hsc-details'),
        ssc : document.querySelector('#ssc'),
        ssc_year : document.querySelector('#ssc-year'),
        ssc_percent : document.querySelector('#ssc-percent'),
        ssc_info: document.querySelector('#ssc-details'),
        
    };
    
    function init()
    {
        
        DOM.be.textContent = "B.E. : GTU";
        DOM.clg_name.textContent = "Babaria Institute of Technology";
        DOM.be_year.textContent = "June 2020";
        DOM.cpi.textContent = "CPI: 9.02";
        DOM.cgpa.textContent = "CGPA: 8.69";
        
        DOM.ssc_name.textContent = "BVB's Narmada Vidyalaya";
        DOM.hsc_name.textContent = "BVB's Narmada Vidyalaya";
        
        DOM.hsc.textContent = "H.S.C. : GSHEB";
        DOM.hsc_year.textContent = "April 2016";
        DOM.hsc_percent.textContent = "Percentage: 65.20%";
        
        DOM.ssc.textContent = "S.S.C. : GSEB";
        DOM.ssc_year.textContent = "April 2014";
        DOM.ssc_percent.textContent = "Percentage: 83.67%";
        
    }
    init();
    
})();