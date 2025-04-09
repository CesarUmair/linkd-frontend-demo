document.addEventListener('DOMContentLoaded', function() {
    // School data
    const schoolData = {
        stanford: {
            name: 'Stanford University',
            image: 'assests/project waterloo bg.PNG',
            description: 'Connect with Stanford alumni through Linkd. Stanford University is a private research university in Stanford, California. The university was founded in 1885 by Leland and Jane Stanford in memory of their only child, Leland Stanford Jr., who had died of typhoid fever at age 15 the previous year.',
            founded: '1885',
            location: 'Stanford, California',
            website: 'https://stanford.edu'
        },
        berkeley: {
            name: 'University of California, Berkeley',
            image: 'assests/project waterloo bg.PNG',
            description: 'Connect with Berkeley alumni through Linkd. The University of California, Berkeley is a public research university in Berkeley, California. Established in 1868, it is the oldest campus of the University of California system and a founding member of the Association of American Universities.',
            founded: '1868',
            location: 'Berkeley, California',
            website: 'https://berkeley.edu'
        },
        yale: {
            name: 'Yale University',
            image: 'assests/project waterloo bg.PNG',
            description: 'Connect with Yale alumni through Linkd. Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701, Yale is the third-oldest institution of higher education in the United States and one of the nine Colonial Colleges chartered before the American Revolution.',
            founded: '1701',
            location: 'New Haven, Connecticut',
            website: 'https://yale.edu'
        },
        waterloo: {
            name: 'University of Waterloo',
            image: 'assests/project waterloo bg full.PNG',
            description: 'Connect with Waterloo alumni through Linkd. The University of Waterloo is a public research university with a main campus in Waterloo, Ontario, Canada. The main campus is on 404 hectares of land adjacent to "Uptown" Waterloo and Waterloo Park.',
            founded: '1957',
            location: 'Waterloo, Ontario, Canada',
            website: 'https://uwaterloo.ca'
        },
        request: {
            name: 'Request Linkd for Your School',
            image: 'assests/project waterloo bg.PNG',
            description: 'Would you like to see Linkd at your school? Fill out the form below and our team will get in touch with you about bringing Linkd to your institution.',
            form: true
        }
    };

    // Get all school cards
    const schoolCards = document.querySelectorAll('.school-card');
    
    // Get modal elements
    const modal = document.getElementById('schoolModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalTitle = document.getElementById('schoolModalLabel');
    const modalImage = document.getElementById('modalSchoolImage');
    const modalInfo = document.getElementById('modalSchoolInfo');
    const closeBtn = document.getElementById('modalCloseBtn');
    
    // Function to show modal
    function showModal() {
        modal.classList.add('show');
        modalBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to hide modal
    function hideModal() {
        modal.classList.remove('show');
        modalBackdrop.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // Add click event listener to close button
    closeBtn.addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    modalBackdrop.addEventListener('click', hideModal);
    
    // Prevent modal from closing when clicking on modal content
    modal.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Add click event listener to each school card
    schoolCards.forEach(card => {
        card.addEventListener('click', function() {
            const school = this.getAttribute('data-school');
            const data = schoolData[school];
            
            // Set modal title
            modalTitle.textContent = data.name;
            
            // Set modal image
            modalImage.style.backgroundImage = `url('${data.image}')`;
            
            // Set modal info content
            if (data.form) {
                modalInfo.innerHTML = `
                    <p>${data.description}</p>
                    <form class="mt-4">
                        <div class="mb-3">
                            <label for="schoolName" class="form-label">School Name</label>
                            <input type="text" class="form-control" id="schoolName" required>
                        </div>
                        <div class="mb-3">
                            <label for="contactName" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="contactName" required>
                        </div>
                        <div class="mb-3">
                            <label for="contactEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="contactEmail" required>
                        </div>
                        <div class="mb-3">
                            <label for="role" class="form-label">Your Role</label>
                            <select class="form-select" id="role" required>
                                <option value="" selected disabled>Select your role</option>
                                <option value="student">Student</option>
                                <option value="alumni">Alumni</option>
                                <option value="faculty">Faculty/Staff</option>
                                <option value="admin">Administrator</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-primary">Submit Request</button>
                    </form>
                `;
            } else {
                modalInfo.innerHTML = `
                    <p>${data.description}</p>
                    <div class="row mt-4">
                        <div class="col-6">
                            <p><strong>Founded:</strong> ${data.founded}</p>
                            <p><strong>Location:</strong> ${data.location}</p>
                        </div>
                        <div class="col-6">
                            <p><strong>Website:</strong> <a href="${data.website}" target="_blank">${data.website}</a></p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button class="btn-primary">Start Exploring Linkd at ${data.name}</button>
                    </div>
                `;
            }
            
            // Show the modal
            showModal();
        });
    });
    
    // Make cards clickable for better UX
    document.querySelectorAll('.card-image, .card-header').forEach(element => {
        element.addEventListener('click', function() {
            const card = this.closest('.school-card');
            if (card) {
                card.dispatchEvent(new Event('click'));
            }
        });
    });
    
    // Form submission handler (for the request form)
    document.addEventListener('submit', function(e) {
        if (e.target.closest('#modalSchoolInfo')) {
            e.preventDefault();
            alert('Thank you for your interest! We will get back to you soon.');
            hideModal();
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });
}); 