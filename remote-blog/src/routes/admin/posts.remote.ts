import { query } from '$app/server';
import { db } from '$lib/server/db';

// CAN DO DATABASE STUFF HERE!
export const get_all_posts = query(async () => db.query.post.findMany());
