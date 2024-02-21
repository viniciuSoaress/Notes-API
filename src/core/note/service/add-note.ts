import CasoDeUso from "../../shared/casoDeUso";
import  ModelNote  from "../model/note";
import RepoNotePrisma from "./repoNotePrisma";




export default class AddNots implements CasoDeUso< string, ModelNote >{

  constructor(private readonly repoNote: RepoNotePrisma){}


  async handle(data: string): Promise<ModelNote> {
   return await this.repoNote.addNote(data)
  }

}