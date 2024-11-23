import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Recette extends Model {}

Recette.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Recette'
});

export default Recette;
