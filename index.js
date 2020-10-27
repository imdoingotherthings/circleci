import express from 'express';
const PORT = process.env.PORT || 8080;
const app = express();
app.get('/', async (req, res) => {
    return res.json({ success: true, message: 'hello old friend.' });
});
app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`);
});