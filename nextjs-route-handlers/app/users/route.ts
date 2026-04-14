import { users } from './data'
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json(users)
}

export async function POST(request: Request) {
    const body = await request.json()
    const newUser = {
        id: users.length + 1,
        name: body.name,
        email: body.email
    }
    users.push(newUser)
    return NextResponse.json(newUser)
}
