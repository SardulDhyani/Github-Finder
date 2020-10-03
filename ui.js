class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3 backg-extra t-white">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div> 

                    <div class="col-md-9">
                        <span class="badge badge-primary mb-2">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary mb-2">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-success mb-2">Followers : ${user.followers}</span>
                        <span class="badge badge-info mb-2">Following : ${user.following}</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company : ${user.company} </li>
                            <li class="list-group-item">Website/Blog : ${user.blog} </li>
                            <li class="list-group-item">Location : ${user.location} </li>
                            <li class="list-group-item">Member Since : ${user.created_at} </li>
                        </ul>
                    </div>

                    <h3 class="page-heading mb-3">Latest Repos</h3>
                    
                    <div id="repos" class="container">
                    
                    </div>
                </div>
            </div>    
        `;
        console.log(user);
    }

    showRepos(repos){
        let output = '';
        repos.forEach((repo)=>{
            output += `
                <div class="card card-body mb-2 card-c"> 
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-2">Stars : ${repo.stargazers_count} </span>
                            <span class="badge badge-secondary mb-2">Watchers : ${repo.watchers_count} </span>
                            <span class="badge badge-success mb-2">Forks : ${repo.forks_count} </span>
                        </div>
                    </div>
                </div>
            `;
        });
        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(msg, className){
        // clear remaining alert
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classname
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(msg));
        // Get Parent
        const container = document.querySelector('.search-container');
        // Get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);

        // timeout after 2 sec
        setTimeout(()=>this.clearAlert(), 2000);

    }
 
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}