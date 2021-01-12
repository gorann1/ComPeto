import CenterService from '../services/CenterService';
import Util from '../utils/CenterUtils';

const util = new Util();

class CenterController {
  static async getAllCenters(req, res) {
    try {
      const allCenters = await CenterService.getAllCenters();
      if (allCenters.length > 0) {
        util.setSuccess(200, 'Centers retrieved', allCenters);
      } else {
        util.setSuccess(200, 'No center found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addCenter(req, res) {
    if (!req.body.name || !req.body.code || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newCenter = req.body;
    try {
      const createdCenter = await CenterService.addCenter(newCenter);
      util.setSuccess(201, 'Center Added!', createdCenter);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedCenter(req, res) {
    const alteredCenter = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateCenter = await CenterService.updateCenter(id, alteredCenter);
      if (!updateCenter) {
        util.setError(404, `Cannot find center with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Center updated', updateCenter);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getACenter(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theCenter = await CenterService.getACenter(id);

      if (!theCenter) {
        util.setError(404, `Cannot find center with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Center', theCenter);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteCenter(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const centerToDelete = await CenterService.deleteCenter(id);

      if (centerToDelete) {
        util.setSuccess(200, 'Center deleted');
      } else {
        util.setError(404, `Center with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default CenterController;