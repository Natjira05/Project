// Description: Node Express REST API with Sequelize and SQLite CRUD Book
// npm install express sequelize sqlite3
// Run this file with node SequlizeSQLiteCRUDBook.js
// Test with Postman

const express = require('express');
const Sequelize = require('sequelize');
const app = express();

// parse incoming requests
app.use(express.json());

// create a connection to the database
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/SQBooks.sqlite'
});

// define the Book model
const Book = sequelize.define('book', {
    id: {
    type: Sequelize. INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
    format: {
    type: Sequelize.STRING,
    allowNull: false
    },
    name: {
    type: Sequelize. STRING,
    allowNull: false
    },
    composer: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

//2
const Format = sequelize.define('format', {
  id: {
  type: Sequelize. INTEGER,
  autoIncrement: true,
  primaryKey: true
  },
  title: {
  type: Sequelize.STRING,
  allowNull: false
  },
  author: {
  type: Sequelize. STRING,
  allowNull: false
  }
});

//3
const Music = sequelize.define('music', {
  id: {
  type: Sequelize. INTEGER,
  autoIncrement: true,
  primaryKey: true
  },
  title: {
  type: Sequelize.STRING,
  allowNull: false
  },
  author: {
  type: Sequelize. STRING,
  allowNull: false
  }
});

//4
const Composer = sequelize.define('composer', {
  id: {
  type: Sequelize. INTEGER,
  autoIncrement: true,
  primaryKey: true
  },
  title: {
  type: Sequelize.STRING,
  allowNull: false
  },
  author: {
  type: Sequelize. STRING,
  allowNull: false
  }
});
    
    // create the books table if it doesn't exist
    sequelize.sync();

//Book
    // route to get all books
    app.get('/books', (req, res) =>{
    Book.findAll().then(books => {
        res. json(books) ;
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to get a book by id
app.get('/books/:id', (req, res) => {
Book.findByPk(req.params.id).then(book => {
    if (!book) {
        res.status (404).send('Book not found');
    } else {
        res.json(book) ;
    }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to create a new book
app.post('/books', (req, res) => {
    Book.create(req.body).then(book => {
    res.send (book)
    }).catch(err => {
    res.status(500).send(err);
    });
});
    
    // route to update a book
app.put('/books/:id', (req, res) => {
    Book.findByPk( req.params.id).then(book => {
    if (!book) {
        res.status(404).send('Book not found');
    } else {
    book.update(req.body).then(() => {
        res.send(book) ;
    }).catch(err => {
        res.status(500).send(err);
    });
    }
    }).catch(err => {
        res. status(500).send(err);
    });
});

// route to delete a book
app.delete('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
    if (!book) {
        res.status(404).send('Book not found');
    } else {
    book.destroy().then(() => {
        res.send({});
    }).catch(err => {
        res.status (500).send(err);
    });
    }s
    }).catch(err => {
    res.status(500).send(err);
    });
    });



//Format
    // route to get all books
    app.get('/format', (req, res) =>{
      Format. findAll().then(format => {
          res. json(format) ;
      }).catch(err => {
          res.status(500).send(err);
      });
  });
  
  // route to get a book by id
  app.get('/formats/:id', (req, res) => {
  Format.findByPk(req.params.id).then(book => {
      if (!book) {
          res.status (404).send('Book not found');
      } else {
          res.json(book) ;
      }
      }).catch(err => {
          res.status(500).send(err);
      });
  });
  
  // route to create a new book
  app.post('/formats', (req, res) => {
      Format.create(req.body).then(book => {
      res.send (book)
      }).catch(err => {
      res.status(500).send(err);
      });
  });
      
      // route to update a book
  app.put('/formats/:id', (req, res) => {
      Format.findByPk( req.params.id).then(book => {
      if (!book) {
          res.status(404).send('Book not found');
      } else {
      book.update(req.body).then(() => {
          res.send(book) ;
      }).catch(err => {
          res.status(500).send(err);
      });
      }
      }).catch(err => {
          res. status(500).send(err);
      });
  });
  
  // route to delete a book
  app.delete('/formats/:id', (req, res) => {
      Format.findByPk(req.params.id).then(book => {
      if (!book) {
          res.status(404).send('Book not found');
      } else {
      book.destroy().then(() => {
          res.send({});
      }).catch(err => {
          res.status (500).send(err);
      });
      }s
      }).catch(err => {
      res.status(500).send(err);
      });
      });

 //Music
    // route to get all books
    app.get('/music', (req, res) =>{
      Music.findAll().then(music => {
          res. json(music) ;
      }).catch(err => {
          res.status(500).send(err);
      });
  });
  
  // route to get a book by id
  app.get('/musics/:id', (req, res) => {
  Music.findByPk(req.params.id).then(book => {
      if (!book) {
          res.status (404).send('Book not found');
      } else {
          res.json(book) ;
      }
      }).catch(err => {
          res.status(500).send(err);
      });
  });
  
  // route to create a new book
  app.post('/musics', (req, res) => {
      Music.create(req.body).then(book => {
      res.send (book)
      }).catch(err => {
      res.status(500).send(err);
      });
  });
      
      // route to update a book
  app.put('/musics/:id', (req, res) => {
      Music.findByPk( req.params.id).then(book => {
      if (!book) {
          res.status(404).send('Book not found');
      } else {
      book.update(req.body).then(() => {
          res.send(book) ;
      }).catch(err => {
          res.status(500).send(err);
      });
      }
      }).catch(err => {
          res. status(500).send(err);
      });
  });
  
  // route to delete a book
  app.delete('/musics/:id', (req, res) => {
      Music.findByPk(req.params.id).then(book => {
      if (!book) {
          res.status(404).send('Book not found');
      } else {
      book.destroy().then(() => {
          res.send({});
      }).catch(err => {
          res.status (500).send(err);
      });
      }
      }).catch(err => {
      res.status(500).send(err);
      });
      });
      
      

//Composer
    // route to get all books
    app.get('/composer', (req, res) =>{
      Composer.findAll().then(composer => {
          res. json(composer) ;
      }).catch(err => {
          res.status(500).send(err);
      });
  });
  
  // route to get a book by id
  app.get('/composers/:id', (req, res) => {
  Composer.findByPk(req.params.id).then(book => {
      if (!book) {
          res.status (404).send('Book not found');
      } else {
          res.json(book) ;
      }
      }).catch(err => {
          res.status(500).send(err);
      });
  });
  
  // route to create a new book
  app.post('/composers', (req, res) => {
      Composer.create(req.body).then(book => {
      res.send (book)
      }).catch(err => {
      res.status(500).send(err);
      });
  });
      
      // route to update a book
  app.put('/composers/:id', (req, res) => {
      Composer.findByPk( req.params.id).then(book => {
      if (!book) {
          res.status(404).send('Book not found');
      } else {
      book.update(req.body).then(() => {
          res.send(book) ;
      }).catch(err => {
          res.status(500).send(err);
      });
      }
      }).catch(err => {
          res. status(500).send(err);
      });
  });
  
  // route to delete a book
  app.delete('/composers/:id', (req, res) => {
      Composer.findByPk(req.params.id).then(book => {
      if (!book) {
          res.status(404).send('Book not found');
      } else {
      book.destroy().then(() => {
          res.send({});
      }).catch(err => {
          res.status (500).send(err);
      });
      }s
      }).catch(err => {
      res.status(500).send(err);
      });
      });



    // start the server
    const port = process.env.PORT || 3000;
    app. listen(port, () => console.log(`Listening on port ${port}...`));