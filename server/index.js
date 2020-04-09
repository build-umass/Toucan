const express= require("express");
const next = require("next");
const jwt = require('jsonwebtoken')
const  path = require("path");
//import next from "next";

const dev = true;// process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req, res) => {
        return handle(req, res);
      });
    // server.use(passport.initialize());
   // server.use(passport.session());
   // server.use(bodyParser.urlencoded({extended : true}));
   // server.use(bodyParser.json());

      

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
        
    server.post('/loginroute', (req, res) =>{
        const user = {
            username: 'patrick',
            password: 'password'
        }
        //Usually we wouldn't store the users password like this, and instead first compare if the password matches then create the user with perhaps id, email, username
        if (true) {
            jwt.sign({user:user}, 'secretkey', {expiresIn: '30m' }, (err,token) => {
                res.json({
                    token: token
                })
            });
            //Not sure what to do after login yet, redirecting to home discard the JWT information. Front end would have to store the JWT and we would retrieve it I believe
            //res.redirect('/home')
        } else {
            res.send('Incorrect username or password.');
        }
    });
    //server.get('/', (req, res) => res.send('Hello World!'))    
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();