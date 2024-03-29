import {NextRequest, NextResponse} from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    // normaal: fetch db
    return NextResponse.json([
        { id: 1, name: 'Melk', price: 2.5 },
        { id: 2, name: 'Brood', price: 3.5 }
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json({ error: validation.error.errors}, { status: 400 } );

    return NextResponse.json(
        {"id": 1, "name": body.name, "price": body.price},
        { status: 201 }
    );
}


