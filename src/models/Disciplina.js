import Sequelize, { Model } from 'sequelize';

export default class Disciplina extends Model {
  static init(sequelize) {
    super.init({
      disciplina: {
        type: Sequelize.STRING,
        defaultValue: ' ',
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
