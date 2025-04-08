import express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// ヘルスチェックエンドポイント
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});