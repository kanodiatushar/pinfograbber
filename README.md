# pinfograbber

The project uses MongoDB Atlas as backend storage.

The dataset is generated using python, and is also available in the repo (productDataset.json). 

This project uses NodeJS and Express in backend, and uses ReactJS and MaterializeCSS in frontend.



Frontend: 
  ReactJS, MaterializeCSS and some npm packages were used to create the webpage. The project was deployed on heroku and is accessable through the link https://pinfograbber.herokuapp.com
  
The webpage has two input fields which take strings as input to query the APIs. 

The "Limit&Offset" field takes limit and offset query inputs only, eg. "limit=5&offset=20" (without quotes). It calls the /api/productlist api and returns the sorted by product name results in the table.

The "Type,Limit&Offset" field takes limit and offset and type query inputs, eg. "type=Type1&limit=5&offset=20" (without quotes). It calls the /api/product api and returns the sorted by product name results in the table.

The "Load API" button calls the /api/productlist API with default offset = 0 and limit = 20.

DataSet:
  The Dataset was genrated using a Python Script, with the following Schema in mind:
  
  {
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
    default: Date.now
  },
  type: {
    type: String,
    required: true
  }
}

The dataset consists of 1500 objects with each property following a naming scheme.
The "name" property is named as Product1,Product2,Product3,Product4......,Product1500 
the "code" property is named as Code1,Code1,Code2,Code2,Code3,Code3...... Code751 (The Code is same for every 2 products)
the "price" property is named as Rs.VVVV where "VVVV" is a random integer between 1500 and 8000 (eg. Rs.4589)
the "date" property is named in dd/mm/yyyy syntax and has dates between 1/1/2012 to 1/1/2019
the "type" property is named as Type1,...Type1,Type2....Type2,....Type15 (The type value is same for each group of 100 products only)

example from dataset:
{
    "name": "Product1400",
    "code": "Code701",
    "price": "Rs.1741",
    "date": "20/09/2013 ",
    "type": "Type14"
  },
  {
    "name": "Product1401",
    "code": "Code702",
    "price": "Rs.7616",
    "date": "10/04/2013 ",
    "type": "Type15"
  }
  
  Backend:
    MongoDB Atlas is used to store the information on a remote server. NodeJS and Express with packages like mongoose were used
    to develop the backend of the project. 
