// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL as string);

export async function getData() {
	const data = await sql`...`;
	return data;
}

export const updateProfile = async (profile: {
	gender: string;
	age: string;
	mbti: string;
	introduction: string;
	interest1: string;
	interest2: string;
	interest3: string;
}) => {
	await sql`CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    gender TEXT,
    age INTEGER,
    mbti TEXT,
    introduction TEXT,
    interest1 TEXT,
    interest2 TEXT,
    interest3 TEXT
  )`;

	await sql`INSERT INTO profiles (gender, age, mbti, introduction, interest1, interest2, interest3) VALUES (
    ${profile.gender},
    ${profile.age},
    ${profile.mbti},
    ${profile.introduction},
    ${profile.interest1},
    ${profile.interest2},
    ${profile.interest3}
  )`;
};
