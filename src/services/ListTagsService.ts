import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepositories);

    const tags = tagsRepository.find();

    return tags;
  }
}

export { ListTagsService };
