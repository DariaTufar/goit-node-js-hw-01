Welcome to simple command-line interface to store contacts, add or remove them, search by ID of the contact.
 
Results of running  commands in the terminal:
 
#1. Get and display the entire list of contacts in the form of a table (console.table). 
node index.js --action list
![Code_wmLX84a7a0](https://user-images.githubusercontent.com/65854631/218201135-da372723-a400-4342-a2a9-477addcb7825.png)

#2. Get contact by id
node index.js --action get --id 5
![Code_23O18U3Z3j](https://user-images.githubusercontent.com/65854631/218201335-a84b8b0c-4a83-4ef8-bba7-0576ecf12b51.png)

#3. Add the contact
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![Code_MX78DqIG16](https://user-images.githubusercontent.com/65854631/218201548-ab4d7783-e253-4225-bf21-d6ea7194768b.png)

#4 Delete the contact
node index.js --action remove --id=3
![Code_66nSD4E5Ru](https://user-images.githubusercontent.com/65854631/218201707-f81ba47a-1f76-44eb-9326-4f56cd9996c0.png)
