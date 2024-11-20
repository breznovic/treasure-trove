import { HeroClass } from "@/app/types/heroesTypes";
import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("HeroesClassesDatabase") as Dexie & {
  heroesClasses: EntityTable<HeroClass, "id">; // Update the table name to 'heroesClasses'
};

db.version(1).stores({
  heroesClasses: "++id, title, bonus, image",
});

export { db };
