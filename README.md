# NYTReact
This is a react application that uses the New York Times api to query ariticles from the NYT database and saves them to my application.
<br><br>
This one page application comprises three different sections: one to <strong>search</strong>, one for <strong>results</strong>, and one for <strong>saved articles</strong>. &nbsp; The react router also makes this app very fast and responsive for a positive user experince. &nbsp; In a more traditional program the application would need to reload the page each time there is a change.&nbsp; Not so with React! &nbsp;The React router only reloads the part of the page that has changed, thus saving time by not having to reload the whole document just for one small change. &nbsp;This is what has made react so great for many well known applications (like Facebook, Walmart, and Bloomberg) that have lots of moving parts. 

<img src="client/public/images/React_logo_wordmark.png" alt="Drawing" style="width: 200px; float: left;" />
<br>
<br>
<br>
<br>
The articles that come back in the search will be stored in Mongo Db.&nbsp; The user has the option to either save the articles, or to remove them. &nbsp;Several express routes are needed for this app: <br><br>

<ul>
<li>one for the get function that my component will use to query MongoDB for all saved articles
<br><br>
<li>a route for the post function that my components will use to save an article to the database
<br><br>
<li>a delete route my components will use to delete a saved article in the database
<br><br>
<li>lastly a get route will load my single HTML page (with ReactJS)
</ul>