import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { log } from "console";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { coinId }: { coinId: string } = body;
    console.log(coinId);
    console.log(body);

    const session = await getAuthSession();
    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }
    console.log("hhhhh");

    await db.userCoin.create({
      data: {
        userId: session.user.id,
        coinId,
        isOptimistic: false, // Default value, you can change this based on your logic
      },
    });

    return new Response("succes!", { status: 200 });
  } catch (error) {
    return new Response("can't add to favorite", { status: 404 });
  }
}
