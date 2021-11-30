import Sequelize, { Model } from 'sequelize';

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

    }, {
      sequelize,
    });

    return this;
  }

  static assosciate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
