export = PlayerBans;
declare const PlayerBans_base: typeof import("./Player");
declare class PlayerBans extends PlayerBans_base {
    constructor(player: any);
    steamID: any;
    communityBanned: any;
    vacBanned: any;
    daysSinceLastBan: any;
    economyBan: any;
    vacBans: any;
    gameBans: any;
    /**
     * @type {Date} Date when the last ban occurred.
     * @readonly
     */
    readonly get lastBan(): Date;
}
//# sourceMappingURL=PlayerBans.d.ts.map