import { Resolver } from "@nestjs/graphql";
import { Image } from "./image.model";

@Resolver(() => Image)
export class ImageResolver { }