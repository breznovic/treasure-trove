import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
  const heroesClasses = await prisma.heroClass.findMany();

  return NextResponse.json(heroesClasses);
}
