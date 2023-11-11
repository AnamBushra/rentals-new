const express = require('express')
const cors = require('cors')
const path = require('path');
var jwt = require('jsonwebtoken');
const multer = require('multer')
// const productController = require('./controllers/productController');
// const userController = require('./controllers/userController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })
const bodyParser = require('body-parser')
const app = express()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8000
const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://naimu:naimu123@cluster0.t6uhb.mongodb.net/?retryWrites=true&w=majority')

app.get('/', (req, res) => {
    res.send('hello...')
})
mongoose.connect('mongodb+srv://anam23:anamnewdb08@cluster0.kimmomy.mongodb.net/?retryWrites=true&w=majority');

const Users = mongoose.model('Users', { email: String,password:String ,mobile:String,username:String});
const Products = mongoose.model('Products', { pname: String,pdesc:String ,price:String,category:String,pimage:String,pcity:String});

// app.get('/search', productController.search)
// app.post('/like-product', userController.likeProducts)
// app.post('/add-product', upload.fields([{ name: 'pimage' }, { name: 'pimage2' }]), productController.addProduct)
// app.get('/get-products', productController.getProducts)
// app.get('/get-product/:pId', productController.getProductsById)
// app.post('/liked-products', userController.likedProducts)
// app.post('/my-products', productController.myProducts)
app.post('/addproduct',upload.single('pimage'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const pname=req.body.pname;
    const pdesc=req.body.pdesc;
    const price=req.body.price;
    const category=req.body.category;
    const pimage=req.file.path;
    const pcity=req.body.pcity;
    const product = new Products({ pname: pname,pdesc:pdesc,price:price,category:category,pimage:pimage,pcity:pcity });
    product.save()
    .then(()=>{
        res.send({message:'saved successfully file'})
    })
    .catch(()=>{
        res.send({message:"fishy err"})
    })
    return;
})
// app.get('/get-products',(req,res)=>{
//     Products.find()
//          .then((result)=>{
//             console.log("user data",result)
//             res.send({message:"succ display",products:result})
//          })
//          .catch((err)=>{
//             res.send({message:"server errr agyi"})
//          })
// })
app.get('/get-products', (req, res) => {
    // const { city, category } = req.query;

    // Define a filter object based on the query parameters
    // const filter = {};
    // if (city) {
    //     filter.city = city;
    // }
    // if (category) {
    //     filter.category = category;
    // }

    Products.find()
        .then((result) => {
            // console.log("Filtered products:", result);
            res.send({ message: "Successfully retrieved products", products: result });
        })
        .catch((err) => {
            res.status(500).send({ message: "Server error", error: err });
        });
});
app.get('/get-product/:id', (req, res) => {
    const productId = req.params.id;
  console.log(productId)
    Products.findById(productId)
      .then((result) => {
        if (result) {
          res.status(200).json({ product:result });
        } else {
          res.status(404).json({ message: 'Product not found' });
        }
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });
  

app.post('/signup', (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const mobile=req.body.mobile;
    const username=req.body.username;
    const user = new Users({ email: email,password:password,mobile:mobile,username:username });
user.save().then(() => console.log('meow'));
})
// app.get('/my-profile/:userId', userController.myProfileById)
// app.get('/get-user/:uId', userController.getUserById)
app.post('/login', (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
   
    Users.findOne({ email: email })
        .then((result) => {
            if (!result) {
                res.send({ message: 'user not found.' })
            } else {
                if (result.password == password) {
                    const token = jwt.sign({
                        data: result
                    }, 'MYKEY', { expiresIn: '1h' });
                    res.send({ message: 'find success.', token: token })
                }
                if (result.password != password) {
                    res.send({ message: 'password wrong.' })
                }

            }

        })
        .catch(() => {
            res.send({ message: 'server err' })
        })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})