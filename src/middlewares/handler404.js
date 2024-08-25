import NotFound from "../errors/NotFound.js";
import errorHandler from "./errorHandler.js";

function handler404(req, res, next){
    const error404 = new NotFound();
    next(error404)
}

export default handler404;