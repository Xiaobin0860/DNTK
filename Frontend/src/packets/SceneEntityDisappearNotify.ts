import type {SceneEntityDisappearNotify} from "src/messages/SceneEntityDisappearNotify";
import type {PacketNotifyDT} from "src/websocket/WSPacket";
import {world} from "../main";

export default function handle(data: PacketNotifyDT<SceneEntityDisappearNotify>)
{
    for(let entityId of data.PacketData.EntityList){
        world.deregisterEntity(entityId, data.PacketData.DisappearType)
    }
    console.log(`Deregistered ${data.PacketData.EntityList.length} entities`)
}