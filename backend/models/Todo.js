"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
export class Todo {
    constructor(id, userId, title, description, isCompleted) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
    }
}
exports.default = Todo;
