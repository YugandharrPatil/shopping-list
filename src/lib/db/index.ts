import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

// create database connection
const connection = connect({
	url: "mysql://z336jm9tbxwa26b9twyh:pscale_pw_lzifluRJwvffFYBeh85yPLfnjpnvAMBHU0QiKpe1RO5@aws.connect.psdb.cloud/some-random-app",
});

export const db = drizzle(connection);
