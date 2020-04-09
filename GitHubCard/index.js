/* Step 1: using axios, send a GET request to the following URL 
        (replacing the placeholder with your Github name):
        https://api.github.com/users/gspayonk
*/

// Make a request for a user with a given ID
axios.get('https://api.github.com/users/gspayonk')
    .then(data => {
        const myProfile = data.data;
        console.log('UserInfo', myProfile);
        const cards = document.querySelector('.cards');
        const cardContent = cardMaker(myProfile);
        console.log(cardContent);
        cards.appendChild(cardContent);
    })


/* Step 2: Inspect and study the data coming back, this is YOUR 
  github info! You will need to understand the structure of this 
  data in order to use it to build your component function 

  Skip to Step 3.
*/
//DATA CHECK - all works like it should!

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['emilyelri', 'DTJohnson5', 'JameaKidrick', 'DevWarr', 'afialydia', 'umekow', 'abarne', 'bayronpuac', 'seanaleid', 'chelsabeth', 'itava0', 'Wais-A', 'dustinsnoap', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', ];


i = 0;

followersArray.forEach((user, i) => {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)

    .then(data => {
        const myProfile = data.data;
        console.log('UserInfo', myProfile);

        const cards = document.querySelector('.cards');
        const cardContent = cardMaker(myProfile);
        console.log(cardContent);

        cards.appendChild(cardContent);

    }), i++;
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//appending components
const cards = document.querySelector('.cards');
console.log(cards);

//reusable componenets to pull in data
function cardMaker(input) {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const userURL = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');
    const contributions = document.createElement('img');

    //setting up structure of elements
    card.appendChild(image);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.appendChild(userURL);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
    profile.appendChild(contributions);

    //setting class names
    card.classList.add('card');
    cardInfo.classList.add('card-info');
    name.classList.add('name');
    userName.classList.add('username');
    contributions.classList.add('contributions');

    //setting text/image/html context
    image.src = input.avatar_url;
    name.textContent = input.name;
    userName.textContent = input.login;
    location.textContent = `Location: ${input.location}`;
    userURL.href = `${input.html_url}`;
    userURL.textContent = `Profile: ${input.html_url}`;
    followers.textContent = `Followers: ${input.followers}`;
    following.textContent = `Following: ${input.following}`;
    bio.textContent = `Bio: ${input.bio}`;
    contributions.src = `http://ghchart.rshah.org/${followersArray[i]}`;




    //card to console
    console.log(card)

    return card;

}



/* List of LS Instructors Github username's: 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
*/