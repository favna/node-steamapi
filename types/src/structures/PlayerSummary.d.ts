export = PlayerSummary;
declare const PlayerSummary_base: typeof import("./Player");
declare class PlayerSummary extends PlayerSummary_base {
    constructor(player: any);
    avatar: {
        small: any;
        medium: any;
        large: any;
    };
    steamID: any;
    url: any;
    created: any;
    lastLogOff: any;
    nickname: any;
    realName: any;
    primaryGroupID: any;
    personaState: any;
    personaStateFlags: any;
    commentPermission: any;
    visibilityState: any;
    countryCode: any;
    stateCode: any;
    cityID: any;
    gameServerIP: any;
    gameServerSteamID: any;
    gameExtraInfo: any;
    gameID: any;
    /**
     * @type {Date} Date when this player's account was created.
     * @readonly
     */
    readonly get createdAt(): Date;
    /**
     * @type {Date} Date when this player last logged off.
     * @readonly
     */
    readonly get lastLogOffAt(): Date;
}
//# sourceMappingURL=PlayerSummary.d.ts.map