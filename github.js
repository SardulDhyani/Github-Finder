class GitHub{
    constructor(){
        this.client_id = 'Insert Your Client Id';
        this.client_secret = 'Insert Your API Key';
        this.repos_count = 10;
        this.repos_sort = 'created : asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json(); 

        return{
            profile,
            repos
        }
    }
}