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
The "name" property is named as Product1,Product2,Product3,Product4......,Product1500 .
the "code" property is named as Code1,Code1,Code2,Code2,Code3,Code3...... Code
