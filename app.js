//how to fetch api's in web application
//using window property called fetch [window.fetch] only works in browser
//fetch is built-in method in browser
//-> https://api.github.com/users

window.fetch( "https://api.github.com/users" ).then(data => {
    console.log( data ) //buffer
    //conv resolved  buffer into json data
    data.json().then( info => {
        let output = [];
        for ( let user of info ) {
            output += `
            <section>
            <article>
            <img src=${user.avatar_url} />
            <h1>${user.login}</h1>
            <p><a href=${user.html_url} target="_blank" >Check Profile</a></p>
            </article>
            </section>

            `;
        }

        document.getElementById( 'template' ).innerHTML = output;

    }).catch(err => console.log(err));
} ).catch( err => {
    console.log( err )
});
