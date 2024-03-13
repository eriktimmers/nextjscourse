import {NextRequest, NextResponse} from "next/server";

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
    if (!body.name)
        return NextResponse.json({ error: 'Request not valid, name is required'}, { status: 400 } );

    return NextResponse.json(
        {"id": 1, "name": body.name},
        { status: 201 }
    );
}