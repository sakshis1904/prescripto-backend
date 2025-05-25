import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

//app config
const app = express()

//middlewares
app.use(express.json());
app.use(cors({
  origin: [
    'https://prescripto-admin-jade.vercel.app/',
    'https://prescripto-frontend-rge7.vercel.app/'
  ],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));

await connectDB();
await connectCloudinary();

//api end points
app.use('/api/admin', adminRouter) //localhost:4000/api/admin/add-doctor
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 4000;
app.get('/', (req, res)=>{
    res.send('API WORKING')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});