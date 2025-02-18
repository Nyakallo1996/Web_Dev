
import { prisma } from "../../db";
//import books from "./data.json";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";



export async function GET(req) {
  
  const books = await prisma.book.findMany();
  console.log("GET books called");
  return NextResponse.json(books);
}

export async function POST(req) {
  const { title, Author } = await req.json();
  const newBook = {
    id: uuidv4(), //books.length + 1,

    title,
    Author,
  };
  books.push(newBook);
  return NextResponse.json("Book added successfully");
}
