import { db } from "@/lib/db";
import { getSession } from "next-auth/react";

export async function GET(res: Response) {
  try {
    const session = await getSession();

    const userC = await db.userCoin.findMany({
      where: {
        userId: session?.user.id,
      },
      include: {
        user: true,
      },
    });
    return new Response(JSON.stringify(userC));
  } catch (error) {
    return new Response("Could not fetch coins", { status: 500 });
  }
}
