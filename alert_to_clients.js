
export class Alert_client
{
    constructor(io,data,date)
    {
        this.data=data;
        this.io=io;
        this.date=date;
    }

    //data
    

    // notify clients
    notify(event_name)
    {
        this.io.broadcast.on("connect",(socket)=>
        {
           socket.emit(event_name,this.data);
        })
    }
}

