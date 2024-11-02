/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://userdb_owner:mxwoJ4tTQE7V@ep-ancient-wave-a5mjpwfl.us-east-2.aws.neon.tech/userdb?sslmode=require",
  },
};
