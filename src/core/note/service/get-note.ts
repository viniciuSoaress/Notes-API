import CasoDeUso from "../../shared/casoDeUso";
import ModelNote from "../model/note";
import RepoNotePrisma from "./repoNotePrisma";



export default class GetNotes implements CasoDeUso<void, ModelNote[]>{

  constructor(private readonly repoNote: RepoNotePrisma){}

  async handle(): Promise<ModelNote[]> {
    return await this.repoNote.getNotes()
  }
}