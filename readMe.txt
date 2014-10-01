(a) your name, UNI, and email address, 
	Name: Alice Chang
	UNI: avc2120
	Email Address: avc2120@columbia.edu

(b) an explanation of any special instructions for running your application, and 
	To run application. Enter in a search query and/or username, and/or a date from/to uploaded. Results will be shown with 10 images per page. To visit the images, click on the images, which fade when mouse hovers over. To visit the user's page, click on their nsid beneath the image. Note that if no filters are provided, no results will be shown. The search results also only show up to 100 images so there is a maximum number of 10 pages available due to the API restriction.

(c) a paragraph justifying your user interface design decisions, and, optionally 
	The assignment was to design user interface that allows users to search and view images using certain filters such as text, username, date since uploaded, and date until uploaded. Each page also displays a total of 10 items. This is implemented by creating a table and after every two images, a new row is created. Thus, I decided to display two images per row because since 10 is divisible by 2, the table will always be filled if there are more than 10 results with the exception of the last page. In order to prevent users from entering in the wrong format for the date and time, I created a drop down selection bar in which the user can select the year, month, and date. The year is also limited from 2004-2014 because according to Wikipedia, Flickr was launched in 2004 but was bought by yahoo in 2005. Furthermore, if the user selects a from-date later than the to-date, no results will be shown and the UI will display “No results found. Please try again.” This allows the users to recognize, diagnose, and quickly recover from error by simply entering in a different date or another search query. Furthermore, the design is minimalistic with very few items on the page.

(d) a description of any additional functionality you have implemented beyond that required for the assignment
	I implemented some extra functionalities such as a 