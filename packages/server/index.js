const express = require('express');
const port = process.env.PORT || 3200;
const app = express();

app.get('/test', (req, res) => {
     res.send({ data: 'Well done and sssHello from server!' });
});

app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});

// Language: typescript
