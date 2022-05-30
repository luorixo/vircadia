import Log from "@Modules/debugging/log";
import { doAPIGet, findErrorMsg } from "src/modules/utilities/apiHelpers";

export interface IpAddress {
    ip: string;
    port: number;
}

export interface Node {
    local: IpAddress;
    pool: string;
    public: IpAddress;
    type: string;
    uptime: string;
    username: string;
    uuid: string;
    version: string;
}

export interface GetNodesResp {
    "nodes": Node[],
}

export const Nodes = {

    async getNodes (): Promise<Node[]> {
        try {
            const apiRequestUrl = "nodes.json";
            const nodesResponse = await doAPIGet(apiRequestUrl) as GetNodesResp;

            return nodesResponse.nodes;
        } catch (err) {
            const errr = findErrorMsg(err);
            Log.error(Log.types.API, `Exception while attempting to get nodes: ${errr}`);
        }

        const nodes: Node[] = [];
        return nodes;
    }

};
