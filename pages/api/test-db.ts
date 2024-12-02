import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string; time?: string }>
) {
    try {
        const queryResult = await pool.query('SELECT NOW() AS current_time');
        const currentTime = queryResult.rows[0].current_time;
        res.status(200).json({ message: 'Database connected', time: currentTime });
        // Query the database to check if the connection is working
        const result = await pool.query('SELECT NOW() AS current_time');
        res.status(200).json({ message: 'Database connected', time: result.rows[0].current_time });

        
        console.log(req.method);
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ message: 'Database connection failed' });
    }
}