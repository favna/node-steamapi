export = GameServer;
declare class GameServer {
    constructor(server: any);
    appID: any;
    actor: any;
    memo: any;
    token: any;
    deleted: any;
    expired: any;
    lastLoginTime: any;
    /**
     * @type {boolean} Whether or not this token is usable.
     * @readonly
     */
    readonly get usable(): boolean;
    /**
     * @type {Date} Date the last time this token was used.
     * @readonly
     */
    readonly get lastLoginAt(): Date;
}
//# sourceMappingURL=GameServer.d.ts.map