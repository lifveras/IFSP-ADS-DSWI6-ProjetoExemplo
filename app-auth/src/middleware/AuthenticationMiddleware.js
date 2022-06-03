require('dotenv').config();
var jwt = require('jsonwebtoken');

module.exports = {
    verifyJWT(req, res, next){
        var token = req.headers['x-access-token'];
        // Alguns usam o atributo Authorization no formato abaixo
        // "Authorization": "Bearer xxx.yyy.zzz"
        //var token = req.headers['Authorization'];
    
        // Se o Token não estiver presente, a autenticação falha e uma msg é retornada
        if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token fornecido.'});
        
        // Verifica se JWT é válido
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            // Se houve erro na validação, retorna mensagem de erro para o client. 
            if (err) return res.status(500).send({ auth: false, message: 'Falha na autenticação do token.' });
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();
       });
    },
}
