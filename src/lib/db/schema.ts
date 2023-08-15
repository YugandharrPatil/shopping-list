import { mysqlTable, serial, text } from "drizzle-orm/mysql-core";

/**
 * This is a sample schema.
 * Replace this with your own schema and then run migrations.
 */

export const item = mysqlTable("item", {
	id: serial("id").autoincrement(),
	itemName: text("item_name"),
});
