const { expect } = require('chai')
 
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists 
} = require('sequelize-test-helpers')
 
const CenterModel = require('../../../models/department')
 
describe('src/models/Department', () => {
  const Center = CenterModel(sequelize, dataTypes)
  const center = new Center()
 
  checkModelName(Center)('Center')
 
  context('properties', () => {
    ;['name', 'code', 'description', 'centerId'].forEach(checkPropertyExists(department));
  })
 
  context('associations', () => {
    const Center = 'some dummy center'
 
    before(() => {
      Department.associate({ Center })
    })
 
    it('defined a belongsTo association with Center', () => {
      expect(Department.belongsTo).to.have.been.calledWith(Center);
    })
  })

});