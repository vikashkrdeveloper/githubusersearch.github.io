const repos = document.querySelector('.repos');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const imageuser = document.querySelector('.imageuser');
const biodata = document.querySelector('.biodata');
const userinput = document.querySelector('.userinput');
const datasubmit = document.querySelector('.datasubmit');
const linkblog = document.querySelector('.linkblog');
const locations = document.querySelector('.location');
const twitter = document.querySelector('.twitter');
const home = document.querySelector('.home');
const hidden = document.querySelector('.hiddendata');
datasubmit.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userdata = userinput.value
    try {
        if (userdata === '') {
            window.alert('Your username field is blank Pleased enter the user name')
        }
        else {
            const res = await fetch(`http://api.github.com/users/${userdata.trim()}`, {
                method: 'GET'
            });
            userinput.value = ""
            const data = await res.json();
            document.title = `User Search Github : ${data.name}`
            const img = `<img src=${data.avatar_url} class="rounded-[50%] w-full h-full" alt="">`
            const span = ` <span class="material-symbols-outlined text-[70px]">
                     person
                    </span>`

            if (data.message !== 'Not Found') {
                imageuser.innerHTML = img
                linkblog.href = data.blog
                linkblog.innerHTML = data.blog
                locations.href = data.location
                locations.innerHTML = data.location
                twitter.href = `https://twitter.com/${data.twitter_username}`
                twitter.innerHTML = `https://twitter.com/${data.twitter_username}`
                repos.innerHTML = data.public_repos;
                followers.innerHTML = data.followers;
                following.innerHTML = data.following;
                biodata.innerHTML = data.bio
            } else {
                document.title = `User Search Github :`
                window.alert('Invalid UserName Pleased enter valid user name')
                imageuser.innerHTML = span
                linkblog.href = ''
                linkblog.innerHTML = 'Not Available'
                locations.href = ''
                locations.innerHTML = 'Not Available'
                twitter.href = ``
                twitter.innerHTML = 'Not Available'
                repos.innerHTML = 0;
                followers.innerHTML = 0;
                following.innerHTML = 0;
                biodata.innerHTML = 'This Profile has no bio.';

            }
        }

    }
    catch (error) {
        console.log('Some technical issue' + error);
    }

})


const loaderdata = () => {
    if (hidden.classList.contains("hidden")) {
        hidden.classList.remove('hidden')
    }
    else {
        hidden.classList.add('hidden')
    }
}