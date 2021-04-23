const query = require('../db/index');

exports.createUser = user => {
    return query("INSERT INTO `users` values (null,?,?)", [user.username, user.password]);
}

exports.getUser = _ => {
    return query("SELECT * FROM `users`", []);
}

exports.editUser = user => {
    return query("UPDATE `users` SET `username` = ?, `password` = ? WHERE `id` = ?", [user.username, user.password, user.id]);
}