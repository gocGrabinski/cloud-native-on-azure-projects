
var nhlteamdataUrl = "https://statsapi.web.nhl.com/api/v1/teams"
var nhl_team_data;
fetch(nhlteamdataUrl)
    .then(response => {
        return response.json();
    })
    .then(teamdata => {
        teamdata.teams.map(team => {
            addTeamToList(team.name);
        })
    })

function addTeamToList(teamname) {
    var listElement = document.getElementById('teams');
    var listItemElment = document.createElement('li');
    var textnode = document.createTextNode(teamname);
    listItemElment.appendChild(textnode);
    listElement.appendChild(listItemElment);
}

