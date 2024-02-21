import { Router } from "express";
import GetNotes from "../../core/note/service/get-note";


export default class GetNotesController{

  constructor(
    server: Router,
    casoDeUso: GetNotes
  ){
    server.get('/', async (req, res, next) => {
      try {
        const notes = await casoDeUso.handle()
        res.send(notes)
      } catch (error) {
        next(error)
      }
    })
  }
}