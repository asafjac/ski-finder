import { Router } from "express";
import { getSearchedResorts } from "../controller/resorts-controller";

export const resortsRouter = Router();

resortsRouter.post("/search", getSearchedResorts);
