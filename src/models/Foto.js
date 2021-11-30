import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Foto obrigatória',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        notEmpty: {
          msg: 'Foto obrigatória',
        },
      },

      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
    });

    return this;
  }

  static assosciate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
