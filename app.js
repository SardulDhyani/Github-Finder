// init Github
const gitHub = new GitHub;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== ''){
        // Make Http call 
        gitHub.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show alert
                ui.showAlert('User not Found', 'alert alert-danger')
                console.log('Not Found');
            } else{
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else{
        // clear Profile
        ui.clearProfile();
    }
});