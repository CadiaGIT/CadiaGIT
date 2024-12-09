
    function toggleDarkMode() {
        // Toggle la classe 'darkmode' sur le body et les autres éléments
        document.body.classList.toggle('darkmode');
        document.querySelector('.navbar').classList.toggle('darkmode');
        document.querySelector('.projects').classList.toggle('darkmode');
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.classList.toggle('darkmode');
        });
    }

