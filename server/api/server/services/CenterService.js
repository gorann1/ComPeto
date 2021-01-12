import database from '../src/models';

class CenterService {
  static async getAllCenters() {
    try {
      return await database.Center.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addCenter(newCenter) {
    try {
      return await database.Center.create(newCenter);
    } catch (error) {
      throw error;
    }
  }

  static async updateCenter(id, updateCenter) {
    try {
      const centerToUpdate = await database.Center.findOne({
        where: { id: Number(id) }
      });

      if (centerToUpdate) {
        await database.Center.update(updateCenter, { where: { id: Number(id) } });

        return updateCenter;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACenter(id) {
    try {
      const theCenter = await database.Center.findOne({
        where: { id: Number(id) }
      });

      return theCenter;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCenter(id) {
    try {
      const centerToDelete = await database.Center.findOne({ where: { id: Number(id) } });

      if (centerToDelete) {
        const deletedCenter = await database.Center.destroy({
          where: { id: Number(id) }
        });
        return deletedCenter;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CenterService;