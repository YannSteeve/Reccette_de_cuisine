import Recette from '../models/Recette.js';


export const addRecette = async (req, res) => {
    const { title, description, image, userId } = req.body;
    try {
        console.log('Tentative d\'ajout de la recette:', { title, description, image, userId });
        const recette = await Recette.create({ title, description, image, userId });
        console.log('Recette ajoutée:', recette);
        res.status(201).json(recette);
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la recette:', error);
        res.status(400).json({ error: 'Erreur lors de l\'ajout de la recette' });
    }
};


export const getAllRecettes = async (req, res) => {
    try {
        console.log('Tentative de récupération de toutes les recettes');
        const recettes = await Recette.findAll();
        console.log('Recettes récupérées:', recettes);
        res.status(200).json(recettes);
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes:', error);
        res.status(400).json({ error: 'Erreur lors de la récupération des recettes' });
    }
};


export const getRecetteById = async (req, res) => {
    const { id } = req.params;
    try {
        console.log('Tentative de récupération de la recette avec l\'ID:', id);
        const recette = await Recette.findByPk(id);
        if (!recette) {
            console.log('Recette non trouvée avec l\'ID:', id);
            return res.status(404).json({ error: 'Recette non trouvée' });
        }
        console.log('Recette récupérée:', recette);
        res.status(200).json(recette);
    } catch (error) {
        console.error('Erreur lors de la récupération de la recette:', error);
        res.status(400).json({ error: 'Erreur lors de la récupération de la recette' });
    }
};


export const updateRecette = async (req, res) => {
    const { id } = req.params;
    const { title, description, image } = req.body;
    try {
        console.log('Tentative de mise à jour de la recette avec l\'ID:', id);
        const recette = await Recette.findByPk(id);
        if (!recette) {
            console.log('Recette non trouvée avec l\'ID:', id);
            return res.status(404).json({ error: 'Recette non trouvée' });
        }
        recette.title = title || recette.title;
        recette.description = description || recette.description;
        recette.image = image || recette.image;
        await recette.save();
        console.log('Recette mise à jour:', recette);
        res.status(200).json(recette);
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la recette:', error);
        res.status(400).json({ error: 'Erreur lors de la mise à jour de la recette' });
    }
};


export const deleteRecette = async (req, res) => {
    const { id } = req.params;
    try {
        console.log('Tentative de suppression de la recette avec l\'ID:', id);
        const recette = await Recette.findByPk(id);
        if (!recette) {
            console.log('Recette non trouvée avec l\'ID:', id);
            return res.status(404).json({ error: 'Recette non trouvée' });
        }
        await recette.destroy();
        console.log('Recette supprimée avec l\'ID:', id);
        res.status(204).send();
    } catch (error) {
        console.error('Erreur lors de la suppression de la recette:', error);
        res.status(400).json({ error: 'Erreur lors de la suppression de la recette' });
    }
};
