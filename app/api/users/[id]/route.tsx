import {NextRequest, NextResponse} from "next/server";

export function GET(
    request: NextRequest,
    { params }: {params: { id: number; }} )
{
    // normal: fetch from db
    // if not found 404 error
    // otherwise: data

    if (params.id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404 } );

    return NextResponse.json({ id: 1, name: 'Erik' });
}

export async function PUT(
    request: NextRequest,
    { params }: {params: { id: number; }} )
{
    const body = await request.json();

    if (!body.name)
        return NextResponse.json({ error: 'Request not valid, name is required'}, { status: 400 } );

    if (params.id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404 } );

    if (body.name == 'coffee')
        return NextResponse.json({ error: 'I\'m a teapot'}, { status: 418 } );

    return NextResponse.json(
        { id: 1, name: body.name }
    );
}

export async function DELETE(
    request: NextRequest,
    { params }: {params: { id: number; }} )
{
    if (params.id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404 } );

    return NextResponse.json(
        {  }
    );

}