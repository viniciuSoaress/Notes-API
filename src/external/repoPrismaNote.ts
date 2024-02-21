import { PrismaClient } from "@prisma/client";
import RepoNotePrisma from "../core/note/service/repoNotePrisma";
import ModelNote from "../core/note/model/note";

export default class RepoPrismaNote implements RepoNotePrisma {

  private readonly prisma = new PrismaClient()

  async addNote(data: string): Promise<ModelNote> {
    return await this.prisma.note.create({
      data: {
        description: data
      }
    })
  }


  async deleteNote(id: string): Promise<ModelNote | void> {
    return await this.prisma.note.delete({
      where: {
        id
      }
    }) ?? undefined
  }

  
  async getNotes(): Promise<ModelNote[]> {
    return await this.prisma.note.findMany()
  }

}