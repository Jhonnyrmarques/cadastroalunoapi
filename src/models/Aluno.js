import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
      },
      ra: {
        type: Sequelize.INTEGER,
        defaultValue: ' ',
        unique: {
          msg: 'RA já cadastrado na base de dados',
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
        unique: {
          msg: 'E-mail já cadastrado na base de dados',
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
