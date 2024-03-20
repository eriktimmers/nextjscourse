import {NextRequest, NextResponse} from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest,
    { params }: {params: { id: number; }} )
{
    // normal: fetch from db
    // if not found 404 error
    // otherwise: data

    if (params.id > 10)
        return NextResponse.json({ error: 'product not found'}, { status: 404 } );

    return NextResponse.json({ id: 1, name: 'Vla', price: 2.95 });
}

export async function PUT(
    request: NextRequest,
    { params }: {params: { id: number; }} )
{
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json({ error: validation.error.errors}, { status: 400 } );

    if (params.id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404 } );

    if (body.name == 'coffee')
        return NextResponse.json({ error: 'I\'m a teapot'}, { status: 418 } );

    return NextResponse.json(
        { id: 1, name: body.name, price: body.price }
    );
}

export async function DELETE(
    request: NextRequest,
    { params }: {params: { id: number; }} )
{
    if (params.id > 10)
        return NextResponse.json({ error: 'Product not found'}, { status: 404 } );

    return NextResponse.json(
        {  }
    );

}