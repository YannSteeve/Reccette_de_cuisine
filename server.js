import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import utilisateurRoutes from './routes/utilisateurRoutes.js';
import recetteRoutes from './routes/RecetteRoutes.js';

 

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/recettes', recetteRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
