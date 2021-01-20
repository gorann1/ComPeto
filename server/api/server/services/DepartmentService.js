import database from '../src/models';

class DepartmentService {
  static async getAllDepartments() {
    try {
      return await database.Department.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addDepartment(newDepartment) {
    try {
      return await database.Department.create(newDepartment);
    } catch (error) {
      throw error;
    }
  }

  static async updateDepartment(id, updateDepartment) {
    try {
      const departmentToUpdate = await database.Department.findOne({
        where: { id: Number(id) }
      });

      if (departmentToUpdate) {
        await database.Department.update(updateDepartment, { where: { id: Number(id) } });

        return updateDepartment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getADepartment(id) {
    try {
      const theDepartment = await database.Department.findOne({
        where: { id: Number(id) }
      });

      return theDepartment;
    } catch (error) {
      throw error;
    }
  }

  static async deleteDepartment(id) {
    try {
      const departmentToDelete = await database.Department.findOne({ where: { id: Number(id) } });

      if (departmentToDelete) {
        const deletedDepartment = await database.Department.destroy({
          where: { id: Number(id) }
        });
        return deletedDepartment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default DepartmentService;