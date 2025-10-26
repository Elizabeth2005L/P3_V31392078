import { infoService } from "../services/info.service.js";

const infoController = {
  getInfoAbout(req, res) {
    const data = infoService.getAbout();

    return res.json(data);
  },

  getPing(req, res) {
    return res.send()
  }
};

export { infoController };
