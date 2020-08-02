export = PlayerServers;
declare const PlayerServers_base: typeof import("./Player");
declare class PlayerServers extends PlayerServers_base {
    constructor(player: any, hide: any);
    steamID: any;
    banned: any;
    expires: any;
    lastActionTime: any;
    servers: any;
    /**
     * @type {Date} Date when this expires.
     * @readonly
     */
    readonly get expiresAt(): Date;
    /**
     * @type {Date} Date when the last action was executed.
     * @readonly
     */
    readonly get lastActionAt(): Date;
}
//# sourceMappingURL=PlayerServers.d.ts.map