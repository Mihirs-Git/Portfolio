(function(){
    
    var DOM = {
        
        title1 : document.querySelector('#gCloud'),
        name1: document.querySelector('#name1'),
        issuer1: document.querySelectorAll('.issuer1'),
        
        title2 : document.querySelector('#webD'),
        name2: document.querySelector('#name2'),
        issuer2: document.querySelector('#issuer2'),
        
        title3 : document.querySelector('#react'),
        name3: document.querySelector('#name3'),
        
        title4 : document.querySelector('#python'),
        name4: document.querySelector('#name4'),
        
        gCloudCertis: [ 
                    document.querySelector('#c1-1'),
                    document.querySelector('#c1-2'),
                    document.querySelector('#c1-3'),
                    document.querySelector('#c1-4'),
                    document.querySelector('#c1-5'),
                    document.querySelector('#c1-6')
                ],
        
        reactCertis: [ 
                    document.querySelector('#c2-1'),
                    document.querySelector('#c2-2'),
                    document.querySelector('#c2-3'),
                    document.querySelector('#c2-4'),
                ],
        
        pythonCertis: [ 
                    document.querySelector('#c3-1'),
                    document.querySelector('#c3-2'),
                    document.querySelector('#c3-3'),
                    document.querySelector('#c3-4'),
                ],    
    };
    function init(){
        
        for(var i=0; i < DOM.issuer1.length; i++)
        {
            DOM.issuer1[i].textContent = "Coursera";
        }
        
        DOM.title1.textContent = "Google Cloud Platform: Specialization";
        DOM.name1.textContent = "Architecting with Google Compute Engine";
        
        const gCloudCourses = [
            "Google Cloud Platform Fundamentals: Core Infrastructure",
            "Essential Cloud Infrastructure: Foundation",
            "Essential Cloud Infrastructure: Core Services",
            "Elastic Cloud Infrastructure: Scaling and Automation",
            "Elastic Cloud Infrastructure: Containers and Services",
            "Reliable Cloud Infrastructure: Design and Process",
        ];
        
        for(var i=0; i < gCloudCourses.length; i++)
        {
            DOM.gCloudCertis[i].textContent = gCloudCourses[i];
        }
        
        DOM.title3.textContent = "React JS: Specialization";
        DOM.name3.textContent = "Full-Stack Web Development with React";
        
        const reactCourses = [
            "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            "Front-End Web Development with React",
            "Multiplatform Mobile App Development with React Native",
            "Nodejs - Express, MongoDB, Mongoose",
        ];
        
        for(var i=0; i < reactCourses.length; i++)
        {
            DOM.reactCertis[i].textContent = reactCourses[i];
        }
        
        
        DOM.title4.textContent = "Python Programming: Specialization";
        DOM.name4.textContent = "Python for Everybody";
        
        const pythonCourses = [
            "Programming for Everybody (Getting Started with Python)",
            "Python Data Structures",
            "Using Python to Access Web Data",
            "Using Databases with Python",
        ];
        
        for(var i=0; i < reactCourses.length; i++)
        {
            DOM.pythonCertis[i].textContent = pythonCourses[i];
        }
        
        DOM.title2.textContent = "Web Design Fundamentals: Course";
        DOM.name2.textContent = "Web Design for Web Developers";
        DOM.issuer2.textContent = "Udemy";
        
        
    }
    
    init();
})();