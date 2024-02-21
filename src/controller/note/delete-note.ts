import { Router } from "express";
import DeleteNote from "../../core/note/service/delete-note";


export default class DeleteNoteController{

  constructor(
    server: Router,
    casoDeUso: DeleteNote
  ){
    server.delete('/:id', async (req, res, next) => {
      try {
        const id = req.params.id

        const noteDeleted = await casoDeUso.handle(id)

        res.send(noteDeleted)

      } catch (error) {
        next(error)
      }
    })
  }
}