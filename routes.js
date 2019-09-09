var controller = require('./controller');
var router = require('express').Router();

router.post('/sign/signin', controller.sign.signin);

router.get('/sign/signout', controller.sign.signout);

router.get('/sign/checksign', controller.sign.checkSign);

router.post('/users/checkId', controller.users.checkId);

router.post('/users/signUp', controller.users.signUp);

router.post('/users/findId', controller.users.findId);

router.post('/users/findPassword', controller.users.findPassword);

router.get('/users/:username', controller.users.getProfile);

router.post('/posts/:userName', controller.posts.createPost);

router.get('/posts/:userName', controller.posts.getPost);

router.post('/posts/picture', controller.posts.postPicture);

router.put('/posts/:userName/:postId', controller.posts.edit);

router.delete('/posts/:userName/:postId', controller.posts.deletePost);

module.exports = router;
