import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function createSuperAdmin() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db(process.env.MONGODB_DB);

    const email = process.env.SUPER_ADMIN_EMAIL;
    const password = process.env.SUPER_ADMIN_PASSWORD;

    if (!email || !password) {
      console.error('SUPER_ADMIN_EMAIL and SUPER_ADMIN_PASSWORD must be set in .env');
      process.exit(1);
    }

    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      console.log('Super admin user already exists');
      await client.close();
      process.exit(0);
    }

    const hashedPassword = await hash(password, 12);
    await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      role: 'super_admin',
      createdAt: new Date()
    });

    console.log('Super admin user created successfully');
    await client.close();
    process.exit(0);
  } catch (error) {
    console.error('Error creating super admin:', error);
    process.exit(1);
  }
}

createSuperAdmin(); 