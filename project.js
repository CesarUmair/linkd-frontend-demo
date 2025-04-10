document.addEventListener('DOMContentLoaded', function() {
    // Get the school name from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const school = urlParams.get('school');
    
    // School data
    const schoolData = {
        stanford: {
            name: 'Stanford',
            image: 'assests/project waterloo bg.PNG'
        },
        berkeley: {
            name: 'Berkeley',
            image: 'assests/project waterloo bg.PNG'
        },
        yale: {
            name: 'Yale',
            image: 'assests/project waterloo bg.PNG'
        },
        waterloo: {
            name: 'Waterloo',
            image: 'assests/project waterloo bg full.PNG'
        },
        request: {
            name: 'Your School',
            image: 'assests/project waterloo bg.PNG'
        }
    };
    
    // Set the school name in the title
    const schoolNameElement = document.getElementById('schoolName');
    
    // Set the background image
    const schoolBgImage = document.getElementById('schoolBgImage');
    
    // Default to Waterloo if no school is specified
    const currentSchool = school && schoolData[school] ? schoolData[school] : schoolData.waterloo;
    
    // Update UI with school data
    if (schoolNameElement) {
        schoolNameElement.textContent = currentSchool.name;
    }
    
    if (schoolBgImage) {
        schoolBgImage.style.backgroundImage = `url('${currentSchool.image}')`;
    }
    
    // Set page title
    document.title = `Linkd - ${currentSchool.name} Alumni Network`;
    
    // Handle tag clicks
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Simulate search with the tag text
            const searchInput = document.querySelector('.search-input');
            searchInput.value = this.textContent;
            
            // Add active state to the clicked tag
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle vote button click
    const voteButton = document.querySelector('.vote-btn');
    if (voteButton) {
        voteButton.addEventListener('click', function() {
            alert('Voting feature coming soon!');
        });
    }
    
    // Handle leaderboard button click
    const leaderboardButton = document.querySelector('.leaderboard-btn');
    if (leaderboardButton) {
        leaderboardButton.addEventListener('click', function() {
            alert('Leaderboard feature coming soon!');
        });
    }
    
    // Handle search
    const searchForm = document.querySelector('.search-box');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            alert(`Searching for: ${searchInput.value}`);
        });
    }
    
    // Make the search button work when clicked
    const searchButton = document.querySelector('.search-btn');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                alert(`Searching for: ${searchInput.value}`);
            }
        });
    }
}); 