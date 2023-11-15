from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd 

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify(users=[user.__dict__ for user in users])

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify(user.__dict__)
    return jsonify(message='User not found'), 404

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(username=data['username'], role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(message='User created successfully', user=new_user.__dict__), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if user:
        data = request.get_json()
        user.username = data['username']
        user.role = data['role']
        db.session.commit()
        return jsonify(message='User updated successfully', user=user.__dict__)
    return jsonify(message='User not found'), 404

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify(message='User deleted successfully')
    return jsonify(message='User not found'), 404


@app.route('/follows', methods=['GET'])
def get_follows():
    follows = Follow.query.all()
    return jsonify(follows=[follow.__dict__ for follow in follows])

@app.route('/follows', methods=['POST'])
def create_follow():
    data = request.get_json()
    new_follow = Follow(following_user_id=data['following_user_id'], followed_user_id=data['followed_user_id'])
    db.session.add(new_follow)
    db.session.commit()
    return jsonify(message='Follow relationship created successfully', follow=new_follow.__dict__), 201

@app.route('/follows/<int:following_user_id>/<int:followed_user_id>', methods=['DELETE'])
def delete_follow(following_user_id, followed_user_id):
    follow = Follow.query.filter_by(following_user_id=following_user_id, followed_user_id=followed_user_id).first()
    if follow:
        db.session.delete(follow)
        db.session.commit()
        return jsonify(message='Follow relationship deleted successfully')
    return jsonify(message='Follow relationship not found'), 404

# Routes for Posts
@app.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify(posts=[post.__dict__ for post in posts])

@app.route('/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    post = Post.query.get(post_id)
    if post:
        return jsonify(post.__dict__)
    return jsonify(message='Post not found'), 404

@app.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    new_post = Post(title=data['title'], body=data['body'], user_id=data['user_id'], status=data['status'])
    db.session.add(new_post)
    db.session.commit()
    return jsonify(message='Post created successfully', post=new_post.__dict__), 201

@app.route('/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    post = Post.query.get(post_id)
    if post:
        data = request.get_json()
        post.title = data['title']
        post.body = data['body']
        post.user_id = data['user_id']
        post.status = data['status']
        db.session.commit()
        return jsonify(message='Post updated successfully', post=post.__dict__)
    return jsonify(message='Post not found'), 404

@app.route('/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    post = Post.query.get(post_id)
    if post:
        db.session.delete(post)
        db.session.commit()
        return jsonify(message='Post deleted successfully')
    return jsonify(message='Post not found'), 404

if __name__ == '__main__':
    app.run(debug=True)