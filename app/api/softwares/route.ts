// app/api/softwares/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const softwares = await prisma.software.findMany({
      include: {
        licenses: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(softwares);
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des logiciels:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
