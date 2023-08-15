import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
	schema: "./src/lib/db/schema.ts",
	out: "./src/lib/db/migrations",
	driver: "mysql2",
	dbCredentials: {
		connectionString: "mysql://z336jm9tbxwa26b9twyh:pscale_pw_lzifluRJwvffFYBeh85yPLfnjpnvAMBHU0QiKpe1RO5@aws.connect.psdb.cloud/some-random-app"!,
	},
	breakpoints: true,
} satisfies Config;
