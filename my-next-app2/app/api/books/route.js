//import books from './data.json';
import { NextResponse } from 'next/server';
//import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../../db';

export async function GET(req) {
/*
    await prisma.book.create({data:{
        title: 'Prisma Book',
        link:"https://www.amazon.com/Beginning-GraphQL-React-NodeJS-Apollo/dp/B0BXMRB5VF/",
        img:"https://m.media-amazon.com/images/I/41+PG6uPdHL._SX404_BO1,204,203,200_.jpg"        
    } })
    */
    const books = await prisma.book.findMany();
    console.log('GET books called');
    return NextResponse.json(books);
}

export async function POST(req) {
    const { title, link, img } = await req.json();

    /*
    const newBook = {
        id: uuidv4(),
        title,
        link,
        img
    };
    */

    await prisma.book.create({data:{
        title: title,
        link:link,
        img:img        
    } })    

    //books.push(newBook);

    return NextResponse.json('Book added successfully');

}


