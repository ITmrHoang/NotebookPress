import webpush from 'web-push';
import pg from 'pg';

const { Client } = pg;

// 👉 Config PostgreSQL
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'himo',
  password: 'himo-minho',
  database: 'himodb'
});

try {
  await client.connect();

  const vapidKeys = webpush.generateVAPIDKeys();

  console.log('Generated VAPID Keys:');
  console.log('Public Key:', vapidKeys.publicKey);
  console.log('Private Key:', vapidKeys.privateKey);

  // 👉 Lưu vào bảng "system"
  await client.query('INSERT INTO system (name, value) VALUES ($1, $2) ON CONFLICT (name) DO UPDATE SET value = EXCLUDED.value', ['VAPID_PUBLIC_KEY', vapidKeys.publicKey]);
  await client.query('INSERT INTO system (name, value) VALUES ($1, $2) ON CONFLICT (name) DO UPDATE SET value = EXCLUDED.value', ['VAPID_PRIVATE_KEY', vapidKeys.privateKey]);

  console.log('✅ Keys saved to PostgreSQL!');
} catch (err) {
  console.error('❌ Error:', err);
} finally {
  await client.end();
}