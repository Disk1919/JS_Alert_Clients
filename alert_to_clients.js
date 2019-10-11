/* eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": false,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false
    }
}]*/


export class alertClient {
  constructor(io, data, date) {
    this.data=data;
    this.io=io;
    this.date=date;
  }
  // notify clients
  notify(eventName) {
    this.io.broadcast.on('connect', (socket)=> {
      socket.emit(event_name, this.data);
    });
  }
}

