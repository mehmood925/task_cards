import express from "express"
import cardService from "../service/card.js";
import auth from '../middleWare/auth.js'
import validationMiddleware from "../middleWare/validation.js";
import cardValidation from "../validations/card.js"

const router = express.Router();

router.post("/add-card", validationMiddleware(cardValidation.create), auth, async (req: any, res: any, _next: any) => {
    try {

        const _service = new cardService();
        const _response = await _service.create(req.body);
        return res.send(_response);
    }
    catch (err) {
        return res.send(err);
    }
});

router.get("/list-cards", auth, async (req: any, res: any, _next: any) => {
    try {
        const _service = new cardService();
        const _response = await _service.list(req.body);
        return res.send(_response);
    }
    catch (err) {
        return res.send(err);
    }

});

export default router;