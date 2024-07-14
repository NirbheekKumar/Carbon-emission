const express = require('express');
const emissionRoutes = require('./routes/emissionRoutes');

const app = express();
app.use(express.json());
app.use('/api/emissions', emissionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
