import {NextRequest, NextResponse} from "next/server";

export function GET(request: NextRequest) {
    // normaal: fetch db
    return NextResponse.json([
        { id: 1, name: 'Jan' },
        { id: 2, name: 'Karel' }
    ]);
}