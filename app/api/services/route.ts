// app/api/services/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des services:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
