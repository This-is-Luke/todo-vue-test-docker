// checkBlacklist.ts
import { Request, Response, NextFunction } from 'express';
import { RowDataPacket } from 'mysql2';
import { db } from '../config/dbConfig';

export const checkBlacklist = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
  
    if (token) {
      try {
        const [rows] = await db.query('SELECT * FROM jwt_blacklist WHERE token = ?', [token]) as unknown as [RowDataPacket[]];
        if (rows.length > 0) {
          return res.status(401).json({ message: 'This token has been blacklisted.' });
        }
      } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
      }
    }
  
    next();
  };
  