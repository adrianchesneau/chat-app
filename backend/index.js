const express = require('express');
const cors = require('cors');
const db = require('./db/connect.js');

const userRoutes = require('./routes/users');
const chatRoomRoutes = require('./routes/chatRooms');
const messageRoutes = require('./routes/messages');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/chatrooms', chatRoomRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
