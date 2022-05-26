# Contact-Book-API
Technologies used:
1.	JavaScript
2.	NodeJS
3.	MongoDB
4.	Postman
5.	Robo3T
6.	GitHub link 
7.	Drive Link(All the files)

Add a new contact
1.	A post request was created to handle this case. localhost:3000/add
2.	For the database side, a new schema was created with the name contactSchema with fields name and address
3.	Postman was used to test the API and Robo 3T for database

Add bulk contacts
1.	A post request was created to handle this case. localhost:3000/bulkAdd
2.	For the database side, a new schema was created with the name bulkSchema with fields name and address, where name and address are empty arrays so that they could accommodate multiple data.

Fetch details of single contact
1.	A get request was created to handle this case. localhost:3000/contact/:name
2.	Here name takes the name of the contact to be searched
3.	Then, findOne function is used to find the contact with the provided name

Fetch list of contacts
1.	A get request was created to handle this case. localhost:3000/contact
2.	Then, find function is used to return all the documents.
 
Update the given contact
1.	A put request was created to handle this case. localhost:3000/contact/:name, where the parameter(name) defines the contact to be updated.
2.	Then, findOneAndUpdate function is used to update the contact.

Delete the given contact
1.	A delete request was created to handle this case. localhost:3000/contact/:name, where the parameter(name) defines the contact to be updated.
2.	Then, findOneAndRemove function is used to delete the contact.














