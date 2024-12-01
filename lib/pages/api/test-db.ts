import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Query the database to check if the connection is working
        const result = await pool.query('SELECT NOW() AS current_time');
        res.status(200).json({ message: 'Database connected', time: result.rows[0].current_time });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ message: 'Database connection failed' });
    }
}
