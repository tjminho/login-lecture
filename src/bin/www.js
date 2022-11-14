    'use strict';
    
    const PORT = 3333;
    
    const app = require('../app')
    app.listen(PORT, () => {
    console.log('서버 가동');
    });