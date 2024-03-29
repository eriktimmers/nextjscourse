import {NextRequest, NextResponse} from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    // normaal: fetch db
    return NextResponse.json([
        { id: 1, name: 'Jan' },
        { id: 2, name: 'Karel' }
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    // first validate
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json({ error: validation.error.errors}, { status: 400 } );

    return NextResponse.json(
        {"id": 1, "name": body.name},
        { status: 201 }
    );
}