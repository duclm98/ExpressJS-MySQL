const userModel = require('../models/users.models');

exports.dangKy = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = {
        username: username,
        password: password,
    };

    const createUser = await userModel.createUser(newUser);
    if (!createUser) {
        return res
            .status(400)
            .send('Có lỗi trong quá trình tạo tài khoản, vui lòng thử lại!');
    }
    return res.send({
        username,
    });
}

exports.danhSach = async (req, res) => {
    const users = await userModel.getUser();
    return res.send(users ?? []);
}

exports.sua = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const id = req.params.id;

    const user = {
        username: username,
        password: password,
        id,
    };

    const editUser = await userModel.editUser(user);
    if (!editUser) {
        return res
            .status(400)
            .send('Có lỗi trong quá trình sửa tài khoản, vui lòng thử lại!');
    }
    return res.send({
        username,
    });
}

exports.xoa = async (req, res) => {

}