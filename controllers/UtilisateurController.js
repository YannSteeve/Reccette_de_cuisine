import Utilisateur from '../models/utilisateur.js';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    const { username, name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Utilisateur.create({ username, name, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        res.status(400).json({ error: 'Erreur lors de l\'inscription' });
    }
};


export const login = async (req, res) => {
    
    const { username, email, password } = req.body;

    try {
        
        let user = await Utilisateur.findOne({ where: { username } });

        
        if (!user) {
            user = await Utilisateur.findOne({ where: { email } });
        }

        
        if (user && await bcrypt.compare(password, user.password)) {
            
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
            res.json({ token });
        } else {
            
            console.warn('Identifiants invalides pour l\'utilisateur:', username || email);
            res.status(401).json({ error: 'Identifiants invalides' });
        }
    } catch (error) {
        
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
};

