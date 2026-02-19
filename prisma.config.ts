import "dotenv/config";

export default {
  schema: "prisma/schema.prisma",
  datasources: {
    db: {
      url: process.env.DATABASE_URL="postgres://user:password@host:port/db",
    },
  },
};
