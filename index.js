import dotenv from 'dotenv';
import { run } from './api';
dotenv.config();
run(process.env);
